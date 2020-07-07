import React from 'react';
import './question.scss';

function Question(props) {
  return (
    <div className='custom-container question-container'>
      <h4 className='question-heading'>Have A Question</h4>
      <div className='custom-container-subheading question-subheading'>
        <p >Contact Our In-House Team Any Convenient Way
        <br></br>Proudly serving you from our Oakville, ON Canada facility
        </p>
      </div>
    </div>
  );
}
export default Question;