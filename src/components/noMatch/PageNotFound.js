import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1>OOPS!!</h1>
        <h2>Oh! Oh!</h2>
        <p>Seems you entered an incorrect url</p>
        <Link to='/'>Go back to Home-page</Link>
        <p>Or</p>
        <Link to='/blog'>Proceed to Block Page</Link>
    </div>
  )
}

export default PageNotFound