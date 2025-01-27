import React from 'react'
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className = "flex flex-col gap-2">
        404 NOT FOUND
        <Link to="/">Home from Link</Link>      
        <a href="/">Home from A</a>
    </div>
  )
}

export default NotFoundPage
