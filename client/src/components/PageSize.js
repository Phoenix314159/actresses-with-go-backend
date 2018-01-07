import React from 'react'

export default ({value, handleInputChange, buttonStyle, setPageSize}) => (
  <div className="setPageSize">
    <input className="form-control" value={value} min="2" max="16" type="number"
           onChange={handleInputChange}/>
    <button className={buttonStyle} onClick={setPageSize}>Set Page Size</button>
  </div>
)
