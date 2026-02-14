import Header from './Header'


const Course = (course) => {
    console.log("course en App", course)
    return (
        <div>

            <Header   {...course} />

        </div>
    )
}

export default Course