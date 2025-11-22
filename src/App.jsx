import React, { useState } from 'react'
import Home from './Home'
import Quiz from './Quiz'
import { HashRouter, Route, Link, Routes } from 'react-router-dom'
import Finalpage from './Finalpage'
import { ScoreContext } from './ScoreContext'

const App = () => {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{score,setScore}}>
    <HashRouter>
      <nav>
        <Link to="/Home"  ><button className="Home">Home</button></Link>
        <Link to="/Quiz"  ><button className="Quiz">Quiz</button></Link>

      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path='/Finalpage' element={<Finalpage/>}/>
      </Routes>
    </HashRouter>
    </ScoreContext.Provider >
  )
}

export default App;