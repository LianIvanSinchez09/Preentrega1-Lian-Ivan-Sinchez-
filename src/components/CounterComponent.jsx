import React from 'react'
import useCounter from '../js/useCounter.js'

const counterComponent = () => {
    const {count, increment, decrement} = useCounter(0,2)
  return (
    <div>
        <h2>Contador: {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterComponent