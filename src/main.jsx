import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {SpotifyApp} from './hooks/SpotifyApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpotifyApp />
  </StrictMode>,
)
