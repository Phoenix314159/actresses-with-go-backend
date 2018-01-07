import React from 'react'

export default ({data, openPopUp}) => (
  <tbody>
  {data.map((row, i) => { //iterate over json object from server
    const {Year, Actress, Movie} = row  //pull off properties to display on every iteration
    return (
      <tr key={i} onClick={() => openPopUp(i)}>
        <td>{Year}</td>
        <td>{Actress}</td>
        <td>{Movie}</td>
      </tr>
    )
  })}
  </tbody>
)


