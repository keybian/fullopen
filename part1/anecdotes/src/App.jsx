import { useState } from 'react'
import viteLogo from '/vite.svg'

const Button = (props) => {
  console.log("Button", props)
  const { handClick, text } = props
  return (

    <button onClick={handClick}>
      {text}
    </button>

  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const ini = Array(anecdotes.length).fill(0)
  const [copy, setCopy] = useState({ ...ini })
  const [selected, setSelected] = useState(0)
  const [valMost, setValMost] = useState(0)
  const [anecdoteKeyMost, setAnecdoteKeyMost] = useState(0)


  function Most(tempcopy) {
    let valuemost = 0
    let keymost = 0
    for (var [key, value] of Object.entries(tempcopy)) {
      if (value > valuemost) {
        valuemost = value
        keymost = key
      }

    }
    setValMost(valuemost)
    setAnecdoteKeyMost(keymost)
  }
  const handClickNext = () => {
    const max = anecdotes.length
    console.log("max", max)
    const next = Math.floor(Math.random() * max)
    console.log("Next", next)
    setSelected(next)
  }
  const handClickVotes = () => {
    console.log(copy)
    const updateCopy = { ...copy }
    updateCopy[selected] += 1

    setCopy(updateCopy)
    console.log("copy", copy)
    console.log("update", updateCopy)
    console.log(ini)
    Most(updateCopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
        has {copy[selected]} votes
      </p>
      <Button handClick={handClickVotes} text='vote' />
      <Button handClick={handClickNext} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[anecdoteKeyMost]}
      <p>
        has {valMost} votes
      </p>
    </div>
  )
}

export default App
