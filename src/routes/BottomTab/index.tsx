import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {blackColor} from '@utils/constants/colors';
import {styles} from '../style';
import { Maps } from '@screens/Maps';
import { Groups } from '@screens/Group';
import { Hub } from '@screens/Hub';
import { Profile } from '@screens/Profile';
import HomeScreen from '@screens/Home';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: {backgroundColor: blackColor, borderTopWidth: 0},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarLabel: () => null, // Hide the label
        })}>
        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('@assets/Location.png')}
                style={[{tintColor: color}, styles.imgContainer]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Groups"
          component={Groups}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="groups" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('@assets/nonfill.png')}
                style={[{tintColor: color}, styles.imgContainer]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hub"
          component={Hub}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="hub" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('@assets/Profile.png')}
                style={[{tintColor: color}, styles.imgContainer]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomTab;
