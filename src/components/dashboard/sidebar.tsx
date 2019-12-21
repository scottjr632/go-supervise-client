import React from 'react'

const Sidebar = ({ children }) => (
    <div className="sidebar shadow-z-1">
        <h2>
      Go Supervisor
        </h2>
        {children}
    </div>
)

export default Sidebar