import './App.css';
import {useState} from 'react';
import { registerWithEmailAndPassword } from './firebase';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => registerWithEmailAndPassword(email, password)}>register!</button>
    </div>
  );
}

export default App;
