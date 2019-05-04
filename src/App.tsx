import React from 'react';
import './App.css';
import { FootballPlayer } from './data/types';
import TeamTable from './components/TeamTable';

const footballPlayers: FootballPlayer[] = [
  {
    name: 'Big Ben',
    id: 'big-nasty-123',
    position: 'QB',
    team: 'PIT',
  },
  {
    name: 'Lev Bell',
    id: 'big-nasty-124',
    position: 'RB',
    team: 'PIT',
  },
  {
    name: 'Juju',
    id: 'big-nasty-125',
    position: 'WR',
    team: 'PIT',
  },
];

function App() {
  return (
    <div className="App">
      <TeamTable players={footballPlayers} />
    </div>
  );
}

export default App;
