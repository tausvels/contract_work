import React from 'react';

function InfoCard(props) {
  const {heading, content} = props;
  const listItems = content.map((item, ind) => (
    <li key={ind}><a href=''>{item}</a></li>
  ));

  return (
    <div className='info-card-container'>
      <h3 className='info-card-heading'>{heading}</h3>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default InfoCard;