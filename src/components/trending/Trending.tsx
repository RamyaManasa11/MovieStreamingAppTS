import React, { useState } from 'react';
import './Trending.css'
import { trending } from '../../dummyData';
// import Upcomming from '../upcoming/Upcomming';
import Home from '../home/Home';

const Trending = () => {
  const [trendingData, SetTrendingData] = useState(trending);
  return (
   <>
      <section className='trending'>
        <Home items={trendingData}/>
        {/* <Upcomming items={trendingData} title="Trending Movies" /> */}
      </section>
   </>
  )
}

export default Trending
