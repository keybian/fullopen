import { useState } from 'react'

import viteLogo from '/vite.svg'

const Display = ({ statistic, text }) => {

  if (text === 'positivi') {
    return (

      <tr>
        <td>{text}</td>
        <td>{statistic} %</td>
      </tr>

    )
  }

  return (

    <tr>
      <td>{text}</td>
      <td>{statistic}</td>
    </tr>

  )


}

const HistoryStatistic = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <Display statistic={props.good} text='good' />
        <Display statistic={props.neutral} text='Neutral' />
        <Display statistic={props.bad} text='Bad' />
        <Display statistic={props.total} text='All' />
        <Display statistic={props.average} text='average' />
        <Display statistic={props.positive} text='positivi' />
      </table>

    </div>
  )
}

const Button = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )


}

function App() {
  const [valueAvg] = useState({
    goodAvg: 1,
    neutralAvg: 0,
    badAvg: -1
  })

  const [goodAllAvg, setGoodAllAvg] = useState(0)
  const [neutralAllAvg, setNeutralAllAvg] = useState(0)
  const [badAllAvg, setBadAllAvg] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
    console.log("GOOD")
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = updatedGood + neutral + bad
    setAll(updatedTotal)
    const updatedGoodAllAvg = updatedGood * valueAvg.goodAvg
    setGoodAllAvg(updatedGoodAllAvg)
    console.log("GOOD", goodAllAvg)
    setAverage((updatedGoodAllAvg + neutralAllAvg + badAllAvg) / updatedTotal)
    setPositive((updatedGood / updatedTotal) * 100)
  }

  const handleClickNeutral = () => {
    console.log("NEUTRAL")
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal = good + updatedNeutral + bad
    setAll(updatedTotal)
    const updatedNeutralAllAvg = updatedNeutral * valueAvg.neutralAvg
    setNeutralAllAvg(updatedNeutralAllAvg)
    console.log("NEUTRAL", neutralAllAvg)
    setAverage((updatedNeutralAllAvg + goodAllAvg + badAllAvg) / updatedTotal)
    setPositive((goodAllAvg / updatedTotal) * 100)
  }

  const handleClickBad = () => {
    console.log("BAD")
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = good + neutral + updatedBad
    setAll(updatedTotal)
    const updatedBadAllAvg = updatedBad * valueAvg.badAvg
    setBadAllAvg(updatedBadAllAvg)
    console.log("BAD", badAllAvg)
    setAverage((updatedBadAllAvg + goodAllAvg + neutralAllAvg) / updatedTotal)
    setPositive((goodAllAvg / updatedTotal) * 100)
  }

  return (

    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='Good' />
      <Button handleClick={handleClickNeutral} text='Neutrl' />
      <Button handleClick={handleClickBad} text='Bad' />
      <h1>statistics</h1>
      <HistoryStatistic total={total} good={good} bad={bad} neutral={neutral} average={average.toFixed(1)} positive={positive.toFixed(1)} />
    </div>
  )
}

export default App
