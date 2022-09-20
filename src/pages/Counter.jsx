import React, { useEffect, useState } from 'react'

import styles from './Counter.module.css'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('counter changed')
  }, [counter])

  const handleOnClick = (operator) => {
    const newValue = operator === '+'
      ? counter + 1
      : counter - 1

      setCounter(newValue)
  }

  return (
    <div className={styles.counter}>
      <span>{counter}</span>
      <button onClick={() => handleOnClick('-')}>-</button>
      <button onClick={() => handleOnClick('+')}>+</button>
    </div>
  )
}

export default Counter
