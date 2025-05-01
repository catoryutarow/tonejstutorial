import * as Tone from 'tone'

export const createSynth = () => {
  return new Tone.Synth().toDestination()
}

export const createNewSynth = () => {
  return new Tone.Synth({
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.1,
      decay: 0.2,
      sustain: 0.5,
      release: 1
    }
  }).toDestination()
}

export const createKick = () => {
  return new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 4,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.001,
      decay: 0.2,
      sustain: 0.01,
      release: 1.2,
      attackCurve: "exponential"
    }
  }).toDestination()
}

export const createSnare = () => {
  return new Tone.NoiseSynth({
    noise: {
      type: "white"
    },
    envelope: {
      attack: 0.001,
      decay: 0.2,
      sustain: 0.01,
      release: 0.2
    }
  }).toDestination()
} 