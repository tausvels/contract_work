import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

const RadioButton = ({desc, selected, setSelected}) => {
  const handleChange = (e, {value}) => {
    setSelected(prevState => ({...prevState, product: value}));
  };
  
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
          checked={selected.product === desc}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
};

export default RadioButton;