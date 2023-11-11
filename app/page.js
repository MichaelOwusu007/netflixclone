import React from 'react'
import './Home.css';

function Homepage() {
  return (
    <div>
      <header className='header'>
        <nav className='flex items-center  justify-between py-2 px-0'>
          <img src="/images/logo.png" className='logo w-[150px] cursor-pointer  '/>
          <div>
            <button className='border rounded py-2 text-[12px] px-2 bg-[#db0001] inline-flex items-center bg-transparent '>English <img src="/images/down-icon.png" className='ml-[10px] w-[10px] '/></button>
            <button className='border py-2 px-5 text-[12px] bg-[#db0001] ml-4 rounded '>Sign In</button>
          </div>
        </nav>
        <div className='header-content absolute top-[50%] left-[50%] text-center mt-[100px] '>
          <h1 className=' lg:text-6xl text-4xl font-semibold max-w-[650px]  ' >Unlimited movies, TV shows and more.</h1>
          <h3 className=' font-medium mb-5 ' >Watch anywhere. Cancel anytime.</h3>
          <p>Readyto watch? Enter your email to create or resatert your membership.</p>
          <form className='email-signup bg-white flex rounded overflow-hidden items-center mt-[30px] text-black '>
            <input type="email" placeholder="Email address" required className='flex-1 outline-0 border-0 ml-[20px] ' />
            <button type='submit' className='border-0  bg-[#db0000] outline-0 lg:py-[15px] py-[5px] lg:px-[30px] px-[20px] text-[16px] text-white cursor-pointer  ' >Get Started</button>
          </form>
        </div>
      </header>
      <div className='features'>
        <div className='row'>
          <div className='text-col'>
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </p>
          </div>
          <div className='img-col' >
            <img src="/images/feature-1.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
