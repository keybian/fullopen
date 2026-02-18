import { useState, useEffect } from 'react'
import personService from './service/persons'
import viteLogo from '/vite.svg'
import Person from './components/Person'
import FilterPerson from './components/FilterPerson'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  console.log('person', persons)

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')
  const [sendMessage, setsendMessage] = useState(null)
  const [typeClassName, setTypeClassName] = useState('error')

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(returndPersons => {
        console.log('promise fulfilled')
        setPersons(returndPersons)
      })

  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('addPerson', persons)
    const newPersons = [...persons]
    console.log('newPersons', newPersons)
    const findName = newPersons.find((x) => x.name === newName.trim())
    console.log('findName', findName)
    console.log(findName)
    if (findName === undefined) {
      const max = newPersons.reduce((prev, current) => (prev.id > current.id) ? prev : current);
      console.log(max)
      const newObject = {
        name: newName,
        number: newPhone,
        id: max.id + 1
      }
      personService
        .create(newObject)
        .then(returnedPersons => {
          console.log(returnedPersons)
          setPersons(newPersons.concat(returnedPersons))
          setsendMessage(`Added ${returnedPersons.name}`)
          setTypeClassName('ok')
          setTimeout(() => {
            setsendMessage(null)
          }, 3000);
          setNewName('')
          setNewPhone('')
        })

    } else {
      if (confirm(`${findName.name}  is already added to phonebook, replace the odl number with a new one`)) {
        toggleUpdateNumber(findName.id)
        setsendMessage(`${findName.name} the odl number replaced`)
        setTypeClassName('ok')
        setNewName('')
        setNewPhone('')
        setTimeout(() => {
          setsendMessage(null)
        }, 3000);
      }
    }

  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterPersonChange = (event) => {
    setFilterName(event.target.value)

  }

  const toggleDelete = (id) => {
    const person = personsToShow.find(x => x.id === id)
    const changePerson = { ...person }


    personService
      .deletedPerson(id, changePerson)
      .then(returnPerson => {
        console.log("returnPerson", returnPerson)
        console.log("return   Person", persons)
        setPersons(persons.filter(x => x.id !== id))
      })


  }

  const toggleUpdateNumber = (id) => {
    const person = personsToShow.find(x => x.id === id)
    const changePerson = { ...person, number: newPhone }


    personService
      .update(id, changePerson)
      .then(returnPerson => {
        console.log("returnPerson", returnPerson)
        setPersons(persons.map(x => x.id !== id ? x : returnPerson))
      })
      .catch(error => {
        setsendMessage(`the Person '${person.name}' was already deleted from server`)
        setTypeClassName('error')
        setPersons(persons.filter(x => x.id !== id))
      })


  }


  const personsToShow = filterName.length === 0 ? persons : persons.filter(x => x.name.toLowerCase().includes(filterName.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={sendMessage} className={typeClassName} />
      <FilterPerson filterName={filterName} onChange={handleFilterPersonChange} />

      <PersonForm addPerson={addPerson} newName={newName}
        onChangeName={handlePersonChange}
        newPhone={newPhone}
        onChangePhone={handleNumberChange}
      />
      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} newName={newName} newPhone={newPhone} toggleDelete={toggleDelete} />

    </div>
  )
}

export default App
