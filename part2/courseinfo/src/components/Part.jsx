const Part = (props) => {
    console.log("parts", props.part.name)
    console.log("parts Content", props)
    return (
        <div>
            <li style={{ listStyleType: 'none' }}>{props.part.name} {props.part.exercises}</li>
        </div>
    )
}

export default Part