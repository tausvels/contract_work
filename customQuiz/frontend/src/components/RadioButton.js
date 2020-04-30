import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

const RadioButton = ({desc, selected, setSelected}) => {
  const handleChange = (e, {value, checked}) => {
    
    setSelected(value)
    console.log('value of selected --> ', selected)
  };
  console.log(selected)
  return (
    <Form>
      <Form.Field>
        Selected: <b>{desc}</b>
      </Form.Field>
      <Form.Field>
        <Checkbox 
          radio
          label='Select'
          name='checkboxRadioGroup'
          value={desc}
          checked={selected === desc}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
};

export default RadioButton;