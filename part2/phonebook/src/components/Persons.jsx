import Person from "./Person"
import personsService from '../service/persons'

const Persons = ({ personsToShow, newName, newPhone, toggleDelete }) => {

    return (
        <div>
            <ul>
                {personsToShow.map(person =>
                    <Person key={person.id} person={person} toggleDelete={toggleDelete} />
                )}
            </ul>
            <div>debug: {newName} {newPhone}</div>
        </div>
    )
}

export default Persons
