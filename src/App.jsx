import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { FixtureProvider } from './context/fixtureContext'
import Display from './pages/First'
import Download from './pages/Download'

function App() {
  console.log('hwllo')
  return (
    <FixtureProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/download' element={<Download />}/>
      </Routes>
      </BrowserRouter>
    </FixtureProvider>
  )
}

export default App
