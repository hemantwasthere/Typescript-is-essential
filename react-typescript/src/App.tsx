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
import ListGenerics from './components/generics/ListGenerics';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import RandomNumber from './components/restriction/RandomNumber';
import Counter from './components/state/Counter';
import User from './components/state/User';
import Status from './components/Status';
import Toast from './components/templateliterals/Toast';

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

      {/* <ListGenerics items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => alert(item)} />
      <ListGenerics items={[1, 2, 3]} onClick={(item) => alert(item)} /> */}
      <ListGenerics items={[
        {
          id: 1,
          first: 'Bruce',
          last: 'Wayne',
        },
        {
          id: 2,
          first: 'Clark',
          last: 'Kent',
        },
        {
          id: 3,
          first: 'Princess',
          last: 'Diana',
        },
      ]} onClick={(item) => alert(item)} />


      {/* <RandomNumber value={10} isPositive isNegative isZero /> */}
      {/* Now we cant set other props cuz isPositive is already been set -> This is called prop restriction */}
      <RandomNumber value={10} isPositive />

      <Toast position='center' />
    </div>
  );
}

export default App;
