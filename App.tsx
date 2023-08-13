import React from 'react';
import BottomTab from './src/routes/BottomTab';
import AppProvider from './src/AppProvider';

function App(): JSX.Element {
  return (
    <AppProvider>
      <BottomTab />
    </AppProvider>
  );
}
export default App;
