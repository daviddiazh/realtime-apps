import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'; //npm i socket.io-client@3.0.1

import { AddLanguage } from './components/AddLanguage';
import { LanguageList } from './components/LanguageList';

const connectSocket = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  });

  return socket;
}

const App = () => {
  
  const [socket] = useState( connectSocket() );
  const [online, setOnline] = useState();
  const [languages, setLanguages] = useState();

  useEffect(() => {
    // console.log(socket)
    setOnline( socket.connected );
  }, [ socket ]);

  useEffect(() => {

    socket.on('connect', () => {
      setOnline(true);
    });

  }, [ socket ]);

  useEffect(() => {

    socket.on('disconnect', () => {
      setOnline(false);
    });

  }, [ socket ]);

  useEffect(() => {

    socket.on('current-languages', ( languages ) => {
      setLanguages(languages)
    });

  }, [ socket ]);

  const voteLanguage = ( id ) => {
    socket.emit('vote-language', id);
  }

  const deleteLanguage = ( id ) => {
    socket.emit('remove-language', id);
  }
  
  return (
    <div className='container'>
      <div className='alert text-center'>
        <p>
          Service Status:
          {
            online 
            ? <span className='text-success'> Online</span>
            : <span className='text-danger'> Offline</span>
          }
        </p>
      </div>


      <h1>Languages Name</h1>
      <hr />

      <div className='row'>
        <div className='col-8'>
          <LanguageList 
            data={ languages }
            voteLanguage={ voteLanguage }
            deleteLanguage={ deleteLanguage }
          />
        </div>

        <div className='col-4'>
          <AddLanguage />
        </div>
      </div>

    </div>
  )
}

export default App