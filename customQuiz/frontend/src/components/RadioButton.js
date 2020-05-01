import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

const RadioButton = ({prodDesc, size, selected, setSelected}) => {
  
  const handleProductChange = (e, {value}) => {
    setSelected(prevState => ({...prevState, product: value}));
  };
  const handleSizeChange = (e, {value}) => {
    setSelected(prevState => ({...prevState, size: value}));
  };
  
  const radioButton = (
    <Checkbox 
      radio
      label='Select'
      name='checkboxRadioGroup'
      value={prodDesc ? prodDesc : size}
      checked={ prodDesc ? (selected.product === prodDesc) : (selected.size === size)}
      onChange={prodDesc ? handleProductChange : handleSizeChange}
    />
  )  
  return (
    <Form>
      <Form.Field>
        {radioButton}
      </Form.Field>
    </Form>
  );
};

export default RadioButton;