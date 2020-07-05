import React from 'react';
import {GeneralContext} from '../../contexts/GeneralContext';

import NavBar from '../../components/Navbar/NavBar';
import Banner from '../banner/Banner';
import Trending from '../trendingProducts/Trending';

export default function Home (props) {

  return (
    <div>
      <NavBar />
      <Banner />
      <Trending />
    </div>
  )
}
