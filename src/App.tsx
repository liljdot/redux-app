import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './state/store'
import { increment, incrementBy, incrementAsync } from './state/counter/counterSlice'

function App() {
  const [number, setNumber] = useState(0)
  const {value: count, isPending} = useSelector((state: RootState) => state.counter)
  const dispatch: AppDispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { dispatch(increment()) }}>
          count is {count}
        </button>
        <button onClick={() => { dispatch(incrementAsync(number)) }}>
          increment by:
        </button>
        <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
        {isPending && <p>
          Loading...
        </p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
