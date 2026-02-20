const NameCountri = ({ countri, showCountrie }) => {

    console.log("cnn3", countri.ccn3)
    const confirmation = () => {
        showCountrie(countri.ccn3)
    }
    return (
        <li>
            {countri.name['common']}
            <br />
            <button onClick={confirmation}>Show</button>
        </li>
    )
}

export default NameCountri