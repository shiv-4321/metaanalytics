import React from 'react'
import { getToken, useAuth } from '../middleware/authMiddleware'

const Homepage = () => {
  const isAuthenticated = useAuth();

  console.log(isAuthenticated);
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Homepage