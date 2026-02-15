import { useState } from 'react'
import viteLogo from '/vite.svg'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  console.log('person', persons)

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')

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

  const handleFilterPersonChange = (event) => {
    setFilterName(event.target.value)

  }

  const personsToShow = filterName.length === 0 ? persons : persons.filter(x => x.name.toLowerCase().includes(filterName.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with:<input value={filterName} onChange={handleFilterPersonChange} />
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
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
        {personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
