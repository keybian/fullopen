const Person = ({ person, toggleDelete }) => {

    const confirmation = () => {
        if (confirm(`Delete ${person.name} ?`)) {
            console.log("hola toggle", person.id)
            toggleDelete(person.id)

        }
    }

    return (
        <li>
            {person.name} {person.number}
            <button onClick={confirmation}> delete</button>
        </li>
    )


}

export default Person