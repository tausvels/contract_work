import React from 'react';
import {GeneralContext} from '../../contexts/GeneralContext';

import NavBar from '../../components/Navbar/NavBar';
import Banner from '../banner/Banner';

export default function Home (props) {

  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  )
}
