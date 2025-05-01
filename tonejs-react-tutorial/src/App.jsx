import { useState } from 'react'
import * as Tone from 'tone'
import './App.css'

export default function App() {
  const synth = new Tone.Synth().toDestination()

  const handleClick = async () => {
    await Tone.start()           // オーディオコンテキストを解放
    synth.triggerAttackRelease('C4', '8n')
  }

  const handleClick2 = async () => {
    await Tone.start()           // オーディオコンテキストを解放
    synth.triggerAttackRelease('E4', '8n')
  }

  const handleNewSynth = async () => {
    await Tone.start()
    newSynth.triggerAttackRelease('G4', '8n')
  }
 
  // 例：新しいシンセサイザーの追加
  const newSynth = new Tone.Synth({
    oscillator: {
      type: "square"  // 波形の種類（sine, square, triangle, sawtooth）
    },
    envelope: {
      attack: 0.1,  // アタック時間
      decay: 0.2,   // ディケイ時間
      sustain: 0.5, // サスティン時間
      release: 1    // リリース時間
    }
  }).toDestination();
  

  return (
    <main className="App" style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Tone.js Tutorial Playground</h1>
      <button
        onClick={handleClick}
        style={{ fontSize: '1.25rem', padding: '0.75rem 2rem', cursor: 'pointer' }}
      >
        Play C4
      </button>
      <button
        onClick={handleClick2}
        style={{ fontSize: '1.25rem', padding: '0.75rem 2rem', cursor: 'pointer' }}
      >
        Play E4
      </button>
      <button
        onClick={handleNewSynth}
        style={{ fontSize: '1.25rem', padding: '0.75rem 2rem', cursor: 'pointer' }}
      >
        Play New Synth
      </button>
    </main>
  )
}
