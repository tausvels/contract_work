import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [selection, setSelection] = useState({
    product: '',
  });
  const updateOrder = (product) => {
    console.log('BEFORE: --> ', selection)
    setSelection((prevState) => ({...prevState, product: product}))
    console.log('AFTER: --> ', selection)
  }
  return (
    <ProductContext.Provider value={[selection, updateOrder, setSelection]}>
      {props.children}
    </ProductContext.Provider>
  )
}