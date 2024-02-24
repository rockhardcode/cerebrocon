import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Messages from "./routes/Messages"
import Contactus from "./routes/Contactus"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
    </div>
  )
}

export default App
