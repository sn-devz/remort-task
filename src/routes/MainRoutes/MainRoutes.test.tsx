import React from 'react';
import {render} from '@testing-library/react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import MainRoutes from './MainRoutes';

// Mock the DrawerNavigator and its Screen components
jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: jest.fn(() => ({
    Navigator: ({children}: {children: React.ReactNode}) => <>{children}</>,
    Screen: ({children}: {children: React.ReactNode}) => <>{children}</>,
  })),
}));

// Mock the components used in the DrawerNavigator screens
jest.mock('../../screens/Dashboard/Dashboard', () => () => <></>);
jest.mock('../../screens/ManageCatalog/ManageCatalog', () => () => <></>);

describe('MainRoutes', () => {
  it('renders correctly', () => {
    render(<MainRoutes />);
    // You can add test assertions here if needed
  });
});
