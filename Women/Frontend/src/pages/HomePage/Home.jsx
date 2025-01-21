import React from 'react'
import HeaderImage from '../../assets/images/header-img.png'
import Card from '../Products/Card'
import './home.css'

export default function Home() {
  return (
    <>
    <div className="container">
        <div className="home-page">
            <div className="home-left">
                <img src={HeaderImage} className='header-image'  />
            </div>
            <div className="home-right">
                <div className="percent">
                    <span className='flat'>Flat</span>
                    <p className='percent-size'>75%Off</p>
                </div>
                <div className="home-heading">
                    <h1>It’s Happening <br />
                    this Season!</h1>
                </div>
               <div>
                <button className="purchase-btn">Purchase Now</button>
               </div>
            </div>
        </div>
    </div>
    <Card/>
    
    </>
  )
}
