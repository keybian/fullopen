const PersonForm = ({ addPerson, newName, onChangeName, newPhone, onChangePhone }) => {
    return (
        <form onSubmit={addPerson}>
            <h3>Add a new</h3>
            <div>
                name:<input value={newName} onChange={onChangeName} />
            </div>
            <div>
                number:<input value={newPhone} onChange={onChangePhone} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm