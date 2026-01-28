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
      <Part part={props[0].part} exercises={props[0].exercises} />
      <Part part={props[1].part} exercises={props[1].exercises} />
      <Part part={props[2].part} exercises={props[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development-'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const contenpart = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 }
  ]
  console.log("Content en App", contenpart)
  return (
    <div>
      <Header course={course} />
      <Content {...contenpart} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App