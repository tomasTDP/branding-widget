import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { LandingV1 } from './LandingV1'
import { LandingV2 } from './LandingV2'
import { LandingV3 } from './LandingV3'
import { LandingV4 } from './LandingV4'

const legacyDocMatch = window.location.pathname.match(/^\/d\/([^/?#]+)/)
if (legacyDocMatch) {
  const search = new URLSearchParams(window.location.search)
  const token = search.get('token') ?? ''
  const next = new URLSearchParams({ fw_share: legacyDocMatch[1] })
  if (token) next.set('token', token)
  window.history.replaceState(null, '', `/?${next.toString()}`)
}

function pickRoute() {
  const p = window.location.pathname.replace(/\/+$/, '')
  if (p === '/v1') return <LandingV1 />
  if (p === '/v2') return <LandingV2 />
  if (p === '/v3') return <LandingV3 />
  if (p === '/v4') return <LandingV4 />
  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pickRoute()}
  </StrictMode>
)
