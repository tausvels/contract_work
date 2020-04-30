import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import RadioButton from './RadioButton';


const ProdCard = ({img, ind, desc, selected, setSelected}) => {
  return (
    <Card key={ind} >
      <Image src={img}/>
      <Card.Content>
        <Card.Header>{desc}</Card.Header>
        <Card.Description>
          <RadioButton desc={desc} selected={selected} setSelected={setSelected}/>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ProdCard;