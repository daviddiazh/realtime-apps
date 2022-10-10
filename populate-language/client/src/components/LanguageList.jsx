import React from 'react'

export const LanguageList = () => {

  const createRows = () => {

    return (
      <tr>
        <td> <button className='btn btn-primary'>+1</button> </td>
        <td> <input className='form-control' /> </td>
        <td>21</td>
        <td> <button className='btn btn-danger'>Delete</button> </td>
      </tr>
    );
  }

  return (
    <div>
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

    </div>
  )
}
