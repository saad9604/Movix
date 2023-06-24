import React from 'react'
import "./styles.scss"
import Herobanner from './herobanner/Herobanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';


const Home = () => {
  return (
    <div className='homepage'>
    <Herobanner/>
    <Trending/>
    <Popular/>
    <TopRated/>
    
    </div>
  )
}

export default Home