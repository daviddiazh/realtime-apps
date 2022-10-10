import React, { useEffect, useState } from 'react';

export const LanguageList = ({ data, voteLanguage, deleteLanguage, changeNameLanguage }) => {

  const [languages, setLanguages] = useState(data);

  useEffect(() => {
    setLanguages(data);
  }, [ data ]);

  const onChangeNameOfLanguage = (event, id) => {
    const newName = event.target.value;

    setLanguages(languages?.map(language => {
      if( language.id === id ) {
        language.name = newName;
      }
        return language;
    }));
  }
  
  const onLostFocus = ( id, name ) => {
    changeNameLanguage( id, name )
  }

  const createRows = () => {
    return (
      languages?.map(language => (
        <tr key={ language.id }>
          <td> 
            <button 
              className='btn btn-primary'
              onClick={ () => voteLanguage( language.id ) }
            >
              +1
            </button> 
          </td>
          <td> <input 
            className='form-control'
            value={language.name}
            onChange={ (event) => onChangeNameOfLanguage( event, language.id ) }
            onBlur={ () => onLostFocus(language.id, language.name) }
          /> </td>
          <td>{ language.votes }</td>
          <td> 
            <button 
              className='btn btn-danger'
              onClick={ () => deleteLanguage( language.id ) }
            >
              Delete
            </button> 
          </td>
        </tr>
      ))
    );
  }

  return (
    <>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { createRows() }
        </tbody>
      </table>

    </>
  )
}
