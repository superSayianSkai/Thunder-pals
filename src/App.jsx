import './App.css'
import Home from "./components/Home/Home.jsx"

const App = () => {
  return (
    <div className="app">
      <div className="blur left-blur"></div>
      <div className="blur right-blur"></div>
      <Home/>
    </div >
  )
}

export default App