
import './App.css'

//pages
import MenuCard from './pages/MenuCard'

//components

function App() {

  return (
    <div className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <MenuCard/>
    </div>
  )
}

export default App
