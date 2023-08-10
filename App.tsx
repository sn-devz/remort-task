import React from 'react';
import AppProvider from './src/AppProvider';
import MainRoutes from './src/routes/MainRoutes/MainRoutes';

function App(): JSX.Element {
  return (
    <AppProvider>
      <MainRoutes />
    </AppProvider>
  );
}

export default App;
