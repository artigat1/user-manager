import React from 'react';

import {StyledApp} from './app.styles';
import {UsersPage} from "./containers/users";

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <StyledApp>
      <header className="flex">

        <h1>Welcome to user-manager!</h1>
      </header>
      <main>
        <UsersPage />
      </main>
    </StyledApp>
  );
};

export default App;
