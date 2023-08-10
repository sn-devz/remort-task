import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoard from '../../screens/DashBoard/Dashboard';
import ManageCatalog from '../../screens/ManageCatalog/ManageCatalog';
const Drawer = createDrawerNavigator();

const MainRoutes = (): JSX.Element => {
  const drawerScrees = [
    {
      name: 'Dash Board',
      screenComponent: DashBoard,
    },
    {
      name: 'ManageCatagory',
      screenComponent: ManageCatalog,
    },
  ];
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="DashBoard">
        {drawerScrees.map(item => (
          <Drawer.Screen
            key={item.name}
            name={item.name}
            component={item.screenComponent}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
