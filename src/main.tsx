import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StatePage from './StatePage,.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/state' element={<StatePage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)
