import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

// ---- IMPORT ACTIONS TO UPDATE STATE FROM THE ACTIONS FOLDER ----- //
import { sampleAction, sampleAction2, reset } from '../../actions/sampleAction';
import { signIn, signOut } from '../../actions/loggingAction';



// destructuing the props
const Home = ({allStates, dispatch}) => {
  // props = {allStates: allStates, dispatch: dispatch} and hence the destructure.
  return (
    <div className = 'home_main'>

      <h1> WELCOME TO TAUSIF'S REACT-REDUX TEMPLATE </h1>
      <h2> This is the landing page OR HOME page</h2>
      <h2> The states are stored in the REDUCERS folder and combined as 'allStates' in INDEX.js of that folder. State Update Actions are stored in Actions Folder.</h2>
      <h1> SAMPLE STATE: {allStates.sample} </h1>
      <p> All the state are passed from APP component which in tern gets from the src/index.js file.</p>
      <p>The buttons given below updates the state of the SAMPLE STATE</p>
      <button onClick = { () => dispatch(sampleAction()) }>Add 1</button> <br></br>
      <button onClick = { () => dispatch(sampleAction2()) }>Add 10</button> <br></br>
      <button onClick = { () => dispatch(reset()) }>RESET SAMPLE STATE</button>
      <br></br>
      <p>Another Sample State is isLOGGED STATE that conditionally renders the following line: </p>
      {allStates.logged ? 
        <>
          <h1>YOU ARE <strong>LOGGED IN</strong></h1>
          <Link to='about'>About Page</Link> <br></br>
          <button onClick = { () => dispatch(signOut()) } >Click to SIGN OUT</button><br></br>
        </> 
        : 
        <>
          <h1>YOU ARE <strong>NOT</strong>LOGGED IN</h1>
          <button onClick = { () => dispatch(signIn()) }>Click to SIGN IN</button><br></br>
        </>
      }

    </div>
  );
};

export default Home;