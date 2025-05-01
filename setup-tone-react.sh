#!/usr/bin/env bash
# Tone.js × React チュートリアル環境セットアップスクリプト
# 使い方: bash setup-tone-react.sh <project-name>
set -euo pipefail

PROJECT_NAME="${1:-tonejs-react-tutorial}"

echo "🚀  Creating React project: $PROJECT_NAME"
npm create vite@latest "$PROJECT_NAME" -- --template react

cd "$PROJECT_NAME"

echo "📦  Installing dependencies (React, Tone.js)…"
npm install
npm install tone

echo "📝  Injecting a minimal Tone.js demo into src/App.jsx"
cat > src/App.jsx <<'EOF'
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
EOF

echo "✅  Setup complete!"
echo "👉  次のコマンドで開発サーバーを起動:"
echo "    cd $PROJECT_NAME && npm run dev"
