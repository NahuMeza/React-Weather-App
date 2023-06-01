
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CordsProvider } from './context/cordsContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CordsProvider>
      <App />
    </CordsProvider>
  </BrowserRouter>

)
