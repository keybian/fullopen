import NameCountri from "./NameCountri"
const ListCountries = ({ listCountries, showCountrie }) => {

    if (listCountries === null) {
        return null
    }
    console.log("LIST", listCountries)
    return (
        <ul>
            {listCountries.map(countri =>
                <NameCountri key={countri.name['common']} countri={countri} showCountrie={showCountrie} />
            )}
        </ul>
    )

}

export default ListCountries