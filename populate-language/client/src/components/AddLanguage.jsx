import React from 'react'
import { useState } from 'react'

export const AddLanguage = ({ addNewLanguage }) => {

  const [ name, setName ] = useState('');

  const onChange = ( e ) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h4>Add Language</h4>

      <form onSubmit={ (e) => onSubmit(e) }>
        <input 
          type="text"
          placeholder='Add New Language'
          className='form-control'
          onChange={ (e) => onChange(e) }
          onBlur={ () => addNewLanguage( name ) }
        />
      </form>
    </div>
  )
}
