// import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter mt-5'>
      <h1 className='mt-5'>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our newslettter and stay updated</p>
      <div>
        <input type="email"  placeholder='Your Email ID'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
