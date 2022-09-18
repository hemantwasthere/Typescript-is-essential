import React from 'react';
import './App.css';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import Button from './components/Button';
import ClassCounter from './components/class/ClassCounter';
import Container from './components/Container';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Counter from './components/state/Counter';
import User from './components/state/User';
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
    <div className='App'>
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

      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      {/* Class Component  */}
      <ClassCounter message='The count value is' />

      {/* Sending prop of components */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
