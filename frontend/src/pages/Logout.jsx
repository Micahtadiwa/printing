import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Logout.css'

function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // Clear any stored authentication data here
      // For example: localStorage.removeItem('token')
      // localStorage.removeItem('user')
      
      // Redirect to home page after logout
      navigate('/')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-icon">👋</div>
        <h1>Logging Out</h1>
        <p>You have been successfully logged out.</p>
        <p className="logout-redirect">Redirecting to home page...</p>
        <div className="loading-spinner"></div>
      </div>
    </div>
  )
}

export default Logout
