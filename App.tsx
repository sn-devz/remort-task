import React from 'react';
import AppProvider from './src/AppProvider';
import MainRoutes from './src/routes/MainRoutes/MainRoutes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <MainRoutes />
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
