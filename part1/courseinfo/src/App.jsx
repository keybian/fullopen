const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log("Content", props)
  return (
    <div>
      <Part part={props[0].name} exercises={props[0].exercises} />
      <Part part={props[1].name} exercises={props[1].exercises} />
      <Part part={props[2].name} exercises={props[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  console.log(props[0].exercises)
  return (
    <div>
      <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development-'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log("Content en App", parts)
  return (
    <div>
      <Header course={course} />
      <Content {...parts} />
      <Total {...parts} />
    </div>
  )
}

export default App