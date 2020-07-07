import React from 'react';

function CustomCard(props) {
  const {color, imageSrc} = props;
  const condition = imageSrc.substr(imageSrc.lastIndexOf('.') + 1) === 'png' ? true : false;


  return (
    // <div className="mini-card-container">
    <div style={{display:'flex', flex: '1 1 25%',position: 'relative'}}>
      <div className="mini-card__round-background-color" 
        style={{ 
          borderColor:`${color}`, 
          backgroundImage: `url(${condition && imageSrc})`, 
          backgroundSize:'contain', 
          backgroundRepeat:'no-repeat',
          border: `${condition && 'none'}`,
          zIndex: 8
        }}>
      </div>
      <div className="mini-card__round-background" 
        style={{
          background: `${!condition && color}`,
        }}>
        </div>
      <div className="mini-card__round-image">
        {!condition && <img src={imageSrc}/>}
      </div>
      <div className="mini-card">
        <div className="mini-card-content">
          <p>All-Inlcusive Pricing</p>
          <p>The lowest price guaranteed! No hidden set up fees or artwork charges. All in Canadian dollars.</p>
        </div>
      </div>
    </div>
  // </div>
  );
}

export default CustomCard;