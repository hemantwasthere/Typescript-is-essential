import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Counter from './components/state/Counter';
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
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name='Dread' isLoggedIn={false} />
      <Button handleClick={() => alert("Button is clicked")} />
      <Button handleClick={(event) => alert(`Button is clicked, Event is ${event}`)} />
      <Button handleClick={(event, id) => alert(`Button is clicked, Event is ${event} with id ${id}`)} />

      <Input value='' handleOnChange={(event) => alert(`${event.target.value}`)} />

      {/* Style props  */}
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />

      <Counter />
    </div>
  );
}

export default App;
