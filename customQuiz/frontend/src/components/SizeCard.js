import React from 'react';
import { Card, CardDescription } from 'semantic-ui-react';
import RadioButton from './RadioButton';


const SizeCard = ({ind, label, width, length, selected, setSelected}) => {
  return (
    <Card key={ind} >
      <Card.Content>
        <Card.Header>{label}</Card.Header>
        <Card.Description>
          Width: {width}
        </Card.Description>
        <CardDescription>
          Length: {length}
        </CardDescription>
        <CardDescription>
          <RadioButton size={label} selected={selected} setSelected={setSelected}/>
        </CardDescription>
      </Card.Content>
    </Card>
  );
};

export default SizeCard;