import React, { createContext, useState } from 'react';

export const GeneralContext = createContext(null);

export const GeneralProvider = (props) => {
  const [state, setState] = useState({
    user: {
      userName: 'Tausif',
      email: 'engr.tausifkhan@gmail.com'
    },
    
  });

  return (
    <GeneralContext.Provider value={[state, setState]}>
      {props.children}
    </GeneralContext.Provider>
  );
};