
const Hello = (props: any) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {

  console.log('Hello from component')
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  const name = 'Peter'
  const age = 10
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)
  return (
    <div>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <p>it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App