import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { GeneralContext } from '../../contexts/GeneralContext';
import { TestContext } from '../../contexts/TestContext';
import './test.css';

// document.getElementById(firstchild.id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
const Test = () => {
  const data = useContext(TestContext);
  const history = useHistory();
  const [state, setState] = useContext(GeneralContext);
  const [count, setCount] = useState(0)
  const [currentChild, setCurrentChild] = useState(null);

  const nextQ = () => {
    console.log(currentChild)
    if (count === data.length) {
      return;
    } else {
      const showChild = currentChild; console.log('CURRENT CHILD --> ', showChild)
      const hideChild = showChild.previousElementSibling; console.log('PREVIOUS CHILD --> ', hideChild)
      showChild.setAttribute('class', 'show');
      if (hideChild) {hideChild.setAttribute('class', 'hide');}
      if (count < (data.length - 1)){
        setCurrentChild(prev => prev = showChild.nextElementSibling);
      }
      setCount(prevCount => prevCount+1)
      // document.getElementById(nextChild.id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
  };

  const preQ = () => {
    let childShowing;
    let childHiding;
    if (count === 1) {return} 
    else if (count === 20) {
      childShowing = currentChild
      childHiding = currentChild.previousElementSibling;
    } else {
      childShowing = currentChild.previousElementSibling; 
      childHiding = childShowing.previousElementSibling;
    }
    // change attribute of children
    childShowing.setAttribute('class', 'hide');
    childHiding.setAttribute('class', 'show');
    setCurrentChild(prev => prev = childShowing);
    setCount(prevCount => prevCount-1)
  }

  useEffect( ()=> {
    const testContainer = document.getElementById('test')
      let firstchild = testContainer.firstChild;
      setCurrentChild(prev => prev = firstchild.nextElementSibling);

      console.log('yay ', currentChild)
      setCount(prevCount => prevCount+1)
  }, [])

  const temp = [];
  const conditioned = data.forEach((num, ind) => {
    if (ind === 0) {
      temp.push('show')
    } else {
      temp.push('hide')
    }
  });
  const output = data.map((num, ind)=>{
    return <h2 key={ind+1} className={temp[ind]} id={`sample${ind+1}`}>{num}</h2>
  });
  return (
    <div className='test-main'>
      <h1>Welcome {state.user.userName} to Test Page!</h1>
      <h1>Count: {count}</h1>
      <button className='btn btn-action' onClick={()=>history.goBack()}>Return to Home</button>
      <hr/>

      <div className="test-container" id='test'>
        {output}
      </div>
      <button onClick={nextQ} className='btn btn-action'>Next Question</button>
      <button onClick={preQ} className='btn btn-danger'>Previous Question</button>
    </div>
  );
};

export default Test;