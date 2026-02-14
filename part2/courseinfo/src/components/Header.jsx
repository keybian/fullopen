import Content from './Content'
import Total from './Total'
const Header = (props) => {
    console.log("header", props.course)
    return (
        <div>
            <ul>
                {props.courses.map(course => {
                    console.log("couer header", course)
                    return (
                        <li key={course.id} style={{ listStyleType: 'none' }}>
                            <div>
                                <h1>{course.name}</h1>
                            </div>
                            <div>
                                <Content {...course} />
                            </div>
                            <div>
                                <Total {...course} />
                            </div>


                        </li>)
                })}


            </ul>

        </div>
    )
}

export default Header