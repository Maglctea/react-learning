import { useState } from 'react'
import './App.css'
import Greeting from '/src/components/Greeting'
import { CurrentTime } from '/src/components/CurrentTime/CurrentTime'
import EventCard from '/src/components/EventCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Greeting/>
    <CurrentTime/>

      <div id="eventList" className='eventList'>        
        <EventCard name="Ивент 1" time="21:30 21.10.2024"/>
        <EventCard name="Ивент 2" time="20:30 22.10.2024"/>
        <EventCard name="Ивент 3" time="20:30 23.10.2024"/>
      </div>
      
      <div className="card">
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>         */}
        
        <button onClick={() => document.getElementById("eventList")}>
          Создать карточку
        </button>
      </div>
    </>
  )
}

export default App
