import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState('');

  const handleSubmit = (allUsers) => {
    setUsers(allUsers);
  };

  return (
    <div className='App'>
      <h1>Who are the people in your group that you want to split with?</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default App;
