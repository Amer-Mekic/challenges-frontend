import { useEffect, useState } from 'react'
import './App.css'
import ChallengeList from './components/ChallengeList'
import axios from 'axios'

function App() {
  const [challenges, setChallenges] = useState([]);
  useEffect(()=>{
    const fetchChallenges = async () => {
      const response = await axios.get("http://localhost:8080/challenges");
    }
    fetchChallenges();
  }, [])
  return (
    <>
      <div>
        <h1>Monthly Challenges</h1>
        <ChallengeList challenges={challenges}/>
      </div>
    </>
  )
}

export default App
