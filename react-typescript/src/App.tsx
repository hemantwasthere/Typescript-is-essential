import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const namesList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ]

  return (
    <div>
      <Greet name="Hemant" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={namesList} />
      <Status status='success' />
    </div>
  );
}

export default App;
