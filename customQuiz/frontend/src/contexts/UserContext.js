import { createContext } from 'react';

const UserContext = createContext({
  id: null,
  name: null,
  email: null,
  google_id: null
});

export default UserContext;