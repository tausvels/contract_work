import React, {useContext} from 'react';
import { TestContext } from '../../contexts/TestContext';
import './test.css';

// document.getElementById(firstchild.id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
const Test = () => {
  const data = useContext(TestContext);
  console.log(data)
  return (
    <div>
      <h1>This is Test Screen</h1>
      <p>Data at Index 0 of TestContext is: {data[0]}</p>
    </div>
  )
};

export default Test;