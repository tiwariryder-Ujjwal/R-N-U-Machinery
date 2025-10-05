import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HOME from './Pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={'/'} exact={true} element={<HOME/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
