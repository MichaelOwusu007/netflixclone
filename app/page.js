import React from 'react'
import './Home.css';

function Homepage() {
  return (
    <div className='overflow-x-hidden'>
      <header className='header'>
        <nav className='flex items-center  justify-between py-2 px-0'>
          <img src="/images/logo.png" className='logo lg:w-[150px] w-[90px] md:w-[120px] cursor-pointer  '/>
          <div>
            <button className='border rounded sm:py-2 py-1 text-[12px] sm:px-5 px-2 bg-[#db0001] inline-flex items-center bg-transparent  '>English <img src="/images/down-icon.png" className='ml-[10px] w-[10px] '/></button>
            <button className='border py-1 px-2 sm:py-2 sm:px-5 text-[12px] bg-[#db0001] ml-4 rounded '>Sign In</button>
          </div>
        </nav>
        <div className='header-content absolute top-[50%] left-[50%] text-center mt-[100px] '>
          <h1 className=' lg:text-4xl xl:text-5xl text-3xl font-semibold max-w-[700px]' >Unlimited movies, TV shows and more.</h1>
          <h3 className=' text-center font-medium mb-5 ' >Watch anywhere. Cancel anytime.</h3>
          <p className='text-center'>Readyto watch? Enter your email to create or resatert your membership today.</p>
          <form className='email-signup bg-white flex rounded overflow-hidden items-center mt-[30px] text-black '>
            <input type="email" placeholder="Email address" required className='flex-1 outline-0 border-0 ml-[20px] ' />
            <button type='submit' className='border-0  bg-[#db0000] outline-0 lg:py-[15px] sm:py-[8px] lg:px-[30px] px-[20px] text-[16px] text-white cursor-pointer  ' >Get Started</button>
          </form>
        </div>
      </header>
      <div className='features py-[50px] px-[12%] text-[22px] '>
        <div className='row flex w-full items-center flex-col lg:flex-row py-[50px] px-0 '>
          <div className='text-col w-full lg:basis-[50%] mb-[20px] xl:leading-8  '>
            <h2 className='font-bold lg:text-3xl xl:text-5xl mb-[20px] '>Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </p>
          </div>
          <div className='img-col lg:basis-[50%] mb-[20px] w-full ' >
            <img src="/images/feature-1.png" className=' block width-[90%] md:w-[80%] m-auto ' />
          </div>
        </div>
          <div className='row flex w-full items-center flex-col  py-[50px] px-0 lg:flex-row-reverse   '>
          <div className='text-col w-full lg:basis-[50%] mb-[20px] xl:leading-8  '>
            <h2 className='font-bold lg:text-3xl xl:text-5xl mb-[20px] '>Download your  shows to watch offline.</h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          <div className='img-col lg:basis-[50%] mb-[20px] w-full ' >
            <img src="/images/feature-2.png" className=' block width-[90%] md:w-[80%] m-auto ' />
          </div>
        </div>
          <div className='row flex w-full items-center flex-col lg:flex-row py-[50px] px-0 '>
          <div className='text-col w-full lg:basis-[50%] mb-[20px] xl:leading-8  '>
            <h2 className='font-bold lg:text-3xl xl:text-5xl mb-[20px] '>Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone , tablet, laptop, and TV.
            </p>
          </div>
          <div className='img-col lg:basis-[50%] mb-[20px] w-full ' >
            <img src="/images/feature-3.png" className=' block width-[90%] md:w-[80%] m-auto ' />
          </div>
        </div>
          <div className='row flex w-full items-center flex-col lg:flex-row-reverse py-[50px] px-0 '>
          <div className='text-col w-full lg:basis-[50%] mb-[20px] xl:leading-8  '>
            <h2 className='font-bold lg:text-3xl xl:text-5xl mb-[20px] '>Create profle for children.</h2>
            <p>
              Send children on adventures with their favourite characters in a space made just for them-free with your membership.
            </p>
          </div>
          <div className='img-col lg:basis-[50%] mb-[20px] w-full ' >
            <img src="/images/feature-4.png" className=' block width-[90%] md:w-[80%] m-auto lg:w-full ' />
          </div>
        </div>
      </div>

      <div className='faq py-[10px] px-[12%] text-center text-[18px] '>
        <h2 className=' font-bold text-[22px]  lg:text-3xl xl:text-4xl '>Frequently asked questions</h2>
        <ul className='accordion my-[60px] mx-auto w-full max-w-[750px] '>
          <li>
            <input type='radio' name='accordion' id='first' />
            <label className='' for='first' >What is Netflix</label>
            <div className='content'>
              <p>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
              </p>
            </div>
          </li>
           <li>
            <input type='radio' name='accordion' id='second' />
            <label className='' for='second' >how much does Netflix cost</label>
            <div className='content'>
              <p>
               Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$2.99 to US$9.99 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>
           <li>
            <input type='radio' name='accordion' id='third' />
            <label className='' for='third' >Where can i watch</label>
            <div className='content'>
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </li>
           <li>
            <input type='radio' name='accordion' id='fourth' />
            <label className='' for='fourth' >How do i cancel ?</label>
            <div className='content'>
              <p>
                Send children on adventures with their favourite characters in a space made just for them-free with your membership
              </p>
            </div>
          </li>
           <li>
            <input type='radio' name='accordion' id='fith'/>
            <label className='' for='fith' >What can i watch on Netflix</label>
            <div className='content'>
              <p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </li>
           <li>
            <input type='radio' name='accordion' id='sixth' />
            <label className='' for='sixth' >Is Netflix good for kids</label>
            <div className='content'>
              <p>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                 Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
              </p>
            </div>
          </li>
        </ul>
        <small className='font-bold text-[15px]  lg:text-lg '>Ready to watch? enter your email to create or start your membership</small>
         <form id='btnwrap' className='email-signup bg-white flex rounded overflow-hidden items-center  mt-[30px] text-black max-w-[600px] mx-auto mb-[60px] '>
            <input type="email" placeholder="Email address" required className='flex-1 outline-0 border-0 ml-[20px] last-input ' />
            <button type='submit' className='border-0 last-button  bg-[#db0000] outline-0 lg:py-[15px] py-[8px] lg:px-[30px] px-[20px] m-auto text-[16px] text-white cursor-pointer ' >Get Started</button>
          </form>
      </div>

      <div className='footer relative py-[50px] lg:px-[15%] px-[8%] sm:px-[5%]  pb-[20px]  border-t-4 border-[#777] text-[#777] md:px-[5%] text-[16px] leading-8 w-full '>
        <h2>Questions? call 000-000-000-000</h2>
      
      <div className=' flex flex-col md:flex-row py-[50px] '>
        <div className='col flex flex-col flex-grow flex-[25%]  '>
          <a href='#'>FAQ</a>
          <a href='#'>Investor Relation</a>
          <a href='#'>Privacy</a>
          <a href='#'>Speed Test</a>
        </div>
          <div className='col flex flex-col  flex-grow flex-[25%] '>
          <a href='#'>FAQ</a>
          <a href='#'>Investor Relation</a>
          <a href='#'>Privacy</a>
          <a href='#'>Speed Test</a>
        </div>
          <div className='col flex flex-col  flex-grow flex-[25%] '>
          <a href='#'>FAQ</a>
          <a href='#'>Investor Relation</a>
          <a href='#'>Privacy</a>
          <a href='#'>Speed Test</a>
        </div>
          <div id='diff' className='col flex flex-col  flex-grow flex-[25%]'>
          <a href='#'>FAQ</a>
          <a href='#'>Investor Relation</a>
          <a href='#'>Privacy</a>
          <a href='#'>Speed Test</a>
        </div>
        </div>
        <button  className='border rounded py-2 text-[12px] px-5  text-white inline-flex  items-center bg-transparent '>English <img src="/images/down-icon.png" className='ml-[10px] w-[10px] ' /></button>
        <p className='copyright-text text-[14px] mt-[20px] mb-[10px] '>Netflix Right On Your Screen</p>
      </div>
      <div></div>
    </div>
  )
}

export default Homepage
