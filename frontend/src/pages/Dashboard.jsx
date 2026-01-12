import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's an overview of your account</p>
      </div>

      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-info">
              <h3>Active Projects</h3>
              <p className="stat-value">12</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h3>Completed</h3>
              <p className="stat-value">48</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <h3>Total Spent</h3>
              <p className="stat-value">$2,450</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <h3>Orders</h3>
              <p className="stat-value">60</p>
            </div>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="dashboard-section">
            <h2>Recent Orders</h2>
            <div className="orders-list">
              <div className="order-item">
                <div className="order-info">
                  <h4>Business Cards</h4>
                  <p>Order #12345 - In Progress</p>
                </div>
                <div className="order-status in-progress">In Progress</div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <h4>Flyers</h4>
                  <p>Order #12344 - Completed</p>
                </div>
                <div className="order-status completed">Completed</div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <h4>Brochures</h4>
                  <p>Order #12343 - Pending</p>
                </div>
                <div className="order-status pending">Pending</div>
              </div>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Quick Actions</h2>
            <div className="actions-grid">
              <a href="#" className="action-card">
                <div className="action-icon">➕</div>
                <h4>New Order</h4>
              </a>
              <a href="#" className="action-card">
                <div className="action-icon">📊</div>
                <h4>View Reports</h4>
              </a>
              <a href="/profile" className="action-card">
                <div className="action-icon">👤</div>
                <h4>My Profile</h4>
              </a>
              <a href="/settings" className="action-card">
                <div className="action-icon">⚙️</div>
                <h4>Settings</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
