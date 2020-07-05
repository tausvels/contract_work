import React, { createContext } from 'react';

export const TestContext = createContext();

export const TestContextProvider = props => {
  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const testObj = {count: 0};
  return (
    <TestContext.Provider value={data}>
      {props.children}
    </TestContext.Provider>
  )
}