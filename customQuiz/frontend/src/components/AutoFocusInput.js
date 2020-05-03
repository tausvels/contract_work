import React from 'react';

const AutoFocusInput = ({type, placeholder, value, onChange, onKeyDown}, ref) => {
  return (
    <input
      style={{ border: 0, outline: "none", fontSize: '35px' }}
      type={type}
      placeholder={placeholder}
      value={value}
      ref={ref}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

const forwardedInput = React.forwardRef(AutoFocusInput);

export default forwardedInput;