import Person from "./Person"
const Persons = ({ personsToShow, newName, newPhone }) => {
    return (
        <div>
            <ul>
                {personsToShow.map(person =>
                    <Person key={person.id} person={person} />
                )}
            </ul>
            <div>debug: {newName} {newPhone}</div>
        </div>
    )
}

export default Persons
