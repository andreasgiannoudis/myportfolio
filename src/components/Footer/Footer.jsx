import React from 'react'

function Footer() {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className='footer'>
      <p>
        <small className='copyright'>Copyright © {year} Andreas Giannoudis</small>
      </p>
    </footer>
  )
}

export default Footer