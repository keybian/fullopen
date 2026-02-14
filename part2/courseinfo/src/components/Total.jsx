const Total = (props) => {
    console.log("total", props)
    return (
        <p> total of {
            props.parts.reduce((acumulador, valorActual) => {
                console.log("acumulador", acumulador)
                console.log("valorActual", valorActual.exercises)
                return (acumulador + valorActual.exercises)
            }, 0)
        } exercises
        </p>


    )



}

export default Total