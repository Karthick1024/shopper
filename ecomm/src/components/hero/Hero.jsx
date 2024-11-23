/* eslint-disable no-unused-vars */
import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero mb-5'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt=""  />
                </div>
                <p>Collections</p>
                <p>for Everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right mt-5">
            <img src={hero_image} alt="" />

        </div>
    </div>
  )
}
