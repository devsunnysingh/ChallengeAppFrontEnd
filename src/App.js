import './App.css';
import ChallengeList from './components/ChallengeList';
import AddChallenge from './components/AddChallenge';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [challenges, setChallengeList] = useState([
      { id: 1, month: 'jan', description: 'First Challenge' },
      { id: 2, month: 'jan', description: 'Second Challenge' },
      { id: 3, month: 'jan', description: 'Third Challenge' },
  ]);

  const fetchChallenges = async () => {
      try {
          const response = await axios.get('http://localhost:8080/challenges');
          setChallengeList(response.data);
          console.log(response);
      } catch (error) {
          console.error("Error fetching challenges: " + error.message);
      }
  };

  useEffect(() => {
      fetchChallenges();
  }, []);

  const handleChallengeAdded = () => {
      fetchChallenges();
  };

  return (
      <div className="App">
          <h1>Monthly Challenges</h1>
          <AddChallenge onChallengeAdded={handleChallengeAdded} />
          <ChallengeList challenges={challenges} />
      </div>
  );
}

export default App;
