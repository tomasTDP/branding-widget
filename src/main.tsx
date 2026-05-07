import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IndexLanding } from './IndexLanding'
import { LandingV1 } from './LandingV1'
import { LandingV2 } from './LandingV2'
import { LandingV3 } from './LandingV3'
import { LandingV4 } from './LandingV4'

function pickRoute() {
  const p = window.location.pathname.replace(/\/+$/, '')
  if (p === '/v1') return <LandingV1 />
  if (p === '/v2') return <LandingV2 />
  if (p === '/v3') return <LandingV3 />
  if (p === '/v4') return <LandingV4 />
  return <IndexLanding />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pickRoute()}
  </StrictMode>
)
