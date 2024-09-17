import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'

import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
