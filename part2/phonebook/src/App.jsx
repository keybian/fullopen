import { useState } from 'react'
import viteLogo from '/vite.svg'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  console.log('person', persons)

  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName
    }
    setPersons(persons.concat(newObject))
    setNewName(' ')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
      <form onSubmit={addPerson}>
        <div>
          name:<input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
