import React from 'react'
import ImageOne from '../images/eggy-toast.jpg'
import ImageTwo from '../images/egg-avocado-spinach.jpg'

function Content() {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="Egg Bomb" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Bomb</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>$10</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="Egg Avocado Spinach Salad" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Avocado Spinach Salad</h2>
          <p className="mb-2">Simple, Healthy and Tasty!</p>
          <span>$15</span>
        </div>
      </div>
    </>
  )
}

export default Content
