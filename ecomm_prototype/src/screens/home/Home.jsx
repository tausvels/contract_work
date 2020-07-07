import React from 'react';
import {GeneralContext} from '../../contexts/GeneralContext';

import NavBar from '../../components/Navbar/NavBar';
import Banner from '../banner/Banner';
import Trending from '../trendingProducts/Trending';
import Specials from '../specials/Specials';
import Custom from '../Custom/Custom';
import ShopByProduct from '../shopByProduct/ShopByProduct';

export default function Home (props) {

  return (
    <div>
      <NavBar />
      <Banner />
      <Trending />
      <Specials />
      <Custom />
      <ShopByProduct />
    </div>
  )
}
