import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="container mainHeader">
    <h1>Academy Award Winning Actresses</h1>
    <Link to="/total">
      <button className="btn btn-default">Show Info</button>
    </Link>
  </div>
)


