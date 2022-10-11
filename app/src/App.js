import './App.css';
import {useState} from 'react';
import { registerWithEmailAndPassword } from './firebase';
import { logInWithEmailAndPassword } from './firebase'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Message from './components/Message/Message';
import Contacts from './components/Contacts/Contacts';

// const emailVal = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <Router>
      <div className="App">
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => registerWithEmailAndPassword(email, password)}>register!</button>
        <br />
        <br />
        <br />
        <input type="email" onChange={(e) => setLoginEmail(e.target.value)}/>
        <input type="password" onChange={(e) => setLoginPassword(e.target.value)}/>
        <button onClick={() => logInWithEmailAndPassword(loginEmail, loginPassword)} >login!</button>
        <br />
        <Message />
        <Contacts />
        {/* <ul>
          <li>
            <Link to="/message">About Us</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul> */}
      </div>
    </Router>
  );
}

export default App;
