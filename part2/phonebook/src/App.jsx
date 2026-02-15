import { useState } from 'react'
import viteLogo from '/vite.svg'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  console.log('person', persons)

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('addPerson', persons)
    const findName = persons.find((x) => x.name === newName.trim())
    console.log(findName)
    if (findName === undefined) {
      const newObject = {
        name: newName,
        number: newPhone
      }

      setPersons(persons.concat(newObject))
      setNewName('')
      setNewPhone('')
    } else {
      alert(`${newName}  is already added to phonebook`)
    }

  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewPhone(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name:<input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number:<input value={newPhone} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
