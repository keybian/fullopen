import Course from './Course'
import Part from './Part'

const Content = (props) => {
    console.log("Content", props)
    return (
        <div>
            <ul>
                {props.parts.map(part => {
                    console.log("content course ", part)
                    return <Part key={part.id} part={part} />
                    // < Part key = { part.id } part = { part } />

                })}
            </ul>
        </div>
    )
}

export default Content