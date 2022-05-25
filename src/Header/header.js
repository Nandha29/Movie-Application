import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

function header() {
  return (
    <div className='head'>
    <h1> Movies</h1>
    <Link to="/">
    <h2>Home</h2>
    </Link>

    <Link to="recentmovies">
    <h2>Recent Movies</h2>
    </Link>

    <Link to="oldmovies">
    <h2>Old Movies</h2>
    </Link>

    <Link to="about">
    <h2>Contact Us</h2>
    </Link>
    </div>
  )
}

export default header