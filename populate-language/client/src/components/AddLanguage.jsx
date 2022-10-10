import React from 'react'

export const AddLanguage = () => {
  return (
    <div>
      <h4>Add Language</h4>

      <form>
        <input 
          type="text"
          placeholder='Add New Language'
          className='form-control'
        />
      </form>
    </div>
  )
}
