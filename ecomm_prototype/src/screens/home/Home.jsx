import React from 'react';
import {GeneralContext} from '../../contexts/GeneralContext';

import NavBar from '../../components/Navbar/NavBar';
import Banner from '../banner/Banner';
import Trending from '../trendingProducts/Trending';
import Specials from '../specials/Specials';
import Custom from '../Custom/Custom';
import ShopByProduct from '../shopByProduct/ShopByProduct';
import Question from '../question/Question';
import Contact from '../contact/Contact';

export default function Home (props) {

  return (
    <div>
      <NavBar />
      <Banner />
      <Trending />
      <Specials />
      <Custom />
      <ShopByProduct />
      <Question />
      <Contact />
    </div>
  )
}
