const Countri = ({ countri }) => {

    if (countri === null) {
        return null
    }
    const esUrl = (texto) => {
        try {
            new URL(texto)
            return true
        } catch {
            return false
        }
    }
    const [detailsCountri] = countri
    console.log("countri", detailsCountri)
    console.log("countri name", detailsCountri.name.common)
    console.log("countri languages", Object.values(detailsCountri.languages))
    console.log("countri flags", Object.values((Object.values(detailsCountri.flags))))
    console.log("countri flag", (Object.values(detailsCountri.flags).find(flag => esUrl(flag))))

    return (
        <div>
            <h1>{detailsCountri.name['common']}</h1>
            <p>Capital : {detailsCountri.capital === undefined ? 'no found' : detailsCountri.capital.toString()}</p>
            <p>Area : {detailsCountri.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(detailsCountri.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>

            <img src={(Object.values(detailsCountri.flags).find(flag => esUrl(flag)))} />
        </div>
    )

}

export default Countri