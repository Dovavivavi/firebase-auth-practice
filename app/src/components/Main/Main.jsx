import React from 'react'
import Message from '../Message/Message'
import Contacts from '../Contacts/Contacts'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function Main() {
  return (
    <div>
        <p>hey</p>
        <ul>
            <li>
              <Link to="/message">About Us</Link>
            </li>
            <li>
              <Link to="/contacts">Contact Us</Link>
            </li>
            <li>
              <Link to="/main">back to main</Link>
            </li>
          </ul>
    </div>
  )
}

export default Main