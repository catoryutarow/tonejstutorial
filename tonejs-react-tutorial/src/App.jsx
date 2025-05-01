import { useState } from 'react'
import * as Tone from 'tone'
import { createSynth, createNewSynth, createKick, createSnare } from './synths/synthConfig'
import './App.css'

export default function App() {
  const synth = createSynth()
  const kick = createKick()
  const snare = createSnare()
  const newSynth = createNewSynth()

  const handleClick = async () => {
    await Tone.start()
    synth.triggerAttackRelease('C4', '8n')
  }

  const handleClick2 = async () => {
    await Tone.start()
    synth.triggerAttackRelease('E4', '8n')
  }

  const handleNewSynth = async () => {
    await Tone.start()
    newSynth.triggerAttackRelease('G4', '8n')
  }

  const handleKick = async () => {
    await Tone.start()
    kick.triggerAttackRelease("C1", "8n")
  }

  const handleSnare = async () => {
    await Tone.start()
    snare.triggerAttackRelease("8n")
  }

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
      <button
        onClick={handleKick}
        style={{ fontSize: '1.25rem', padding: '0.75rem 2rem', cursor: 'pointer' }}
      >
        Kick
      </button>
      <button
        onClick={handleSnare}
        style={{ fontSize: '1.25rem', padding: '0.75rem 2rem', cursor: 'pointer' }}
      >
        Snare
      </button>
    </main>
  )
}
