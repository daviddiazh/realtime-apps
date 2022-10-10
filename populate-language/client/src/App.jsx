import React from 'react'
import { AddLanguage } from './components/AddLanguage'
import { LanguageList } from './components/LanguageList'

const App = () => {
  return (
    <div className='container'>
      <div className='alert text-center'>
        <p>
          Service Status:
          <span className='text-success'> Online</span>
          <span className='text-danger'> Offline</span>
        </p>
      </div>


      <h1>Languages Name</h1>
      <hr />

      <div className='row'>
        <div className='col-8'>
          <LanguageList />
        </div>

        <div className='col-4'>
          <AddLanguage />
        </div>
      </div>

    </div>
  )
}

export default App