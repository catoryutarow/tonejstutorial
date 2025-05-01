import { useState } from 'react'
import * as Tone from 'tone'
import './App.css'

export default function App() {
  const [isRunning, setIsRunning] = useState(false)
  const synth = new Tone.Synth().toDestination()

  const handleClick = async () => {
    await Tone.start()           // オーディオコンテキストを解放
    synth.triggerAttackRelease('C4', '8n')
    setIsRunning(true)
    setTimeout(() => setIsRunning(false), 500) // ボタン文言を戻す
  }

  return (
    <main className="App" style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Tone.js Tutorial Playground</h1>
      <button
        onClick={handleClick}
        style={{ fontSize: '1.25rem', padding: '0.75rem 2rem', cursor: 'pointer' }}
      >
        {isRunning ? 'Playing…' : 'Play C4'}
      </button>
    </main>
  )
}
