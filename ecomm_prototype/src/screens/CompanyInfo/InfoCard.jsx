import React from 'react';

function InfoCard(props) {
  const {heading, content} = props;
  const listItems = content.map((str, ind) => {
    if (str.includes('<b>')) {
      const boldString = str.split('<b>').pop();
      return <li key={ind}><a href=''><b>{boldString}</b></a></li>
    }
    return <li key={ind}><a href=''>{str}</a></li>
  });

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