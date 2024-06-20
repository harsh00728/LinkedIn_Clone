import './App.css'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App;
