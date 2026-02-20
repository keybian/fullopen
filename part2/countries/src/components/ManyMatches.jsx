const ManyMatches = ({ manyMatches }) => {

    if (manyMatches === null) {
        return null
    }
    return (
        <div>
            Too many matches, specify another filter
        </div>
    )
}

export default ManyMatches