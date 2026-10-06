import { useState } from 'react'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [username, setUsername] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  function handleLogin(event) {
    event.preventDefault()
    setLoginMessage(`Welcome, ${username}!`)
  }

  return (
    <main className="page">
      <header className="heading">
        <p className="eyebrow">THE RETRO COLLECTION</p>
        <h1>Side A — Sign In</h1>
        <p>Press play to open the login form.</p>
      </header>

      <div className="login-layout">
        <section
          className={`player ${isPlaying ? 'playing' : ''}`}
          aria-label="Cassette player"
        >
          <div className="player-top">
            <span>MEMORIES / STEREO</span>
            <span>● TAPE MODE</span>
          </div>

          <div className="cassette">
            <div className="cassette-label">
              <span>VOL. 01</span>
              <h2>Your session starts here</h2>
              <span>STEREO • LOGIN EXPERIENCE</span>
            </div>

            <div className="tape-window">
              <div className="reel">
                <div className="reel-center"></div>
              </div>

              <div className="tape-line"></div>

              <div className="reel">
                <div className="reel-center"></div>
              </div>
            </div>

            <div className="cassette-bottom"></div>
          </div>

          <div className="controls">
            <button type="button" onClick={() => setIsPlaying(true)}>
              ▶ PLAY
            </button>

            <button
              type="button"
              onClick={() => {
                setIsPlaying(false)
                setLoginMessage('')
              }}
            >
              ■ STOP
            </button>
          </div>

          <p className="player-note" aria-live="polite">
            {isPlaying ? 'Tape is playing' : 'Ready to play'}
          </p>
        </section>

        {isPlaying && (
          <form className="login-form" onSubmit={handleLogin}>
            <p className="eyebrow">YOUR PERSONAL MIXTAPE</p>
            <h2>Welcome back</h2>
            <p>Enter your username and password to continue.</p>

            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value)
                setLoginMessage('')
              }}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            <button type="submit">LOGIN →</button>

            {loginMessage && <p role="status">{loginMessage}</p>}
          </form>
        )}
      </div>
    </main>
  )
}

export default App