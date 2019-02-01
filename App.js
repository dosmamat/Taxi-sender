import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import Main from './src/screens/main/main.js';
import Info from './src/screens/info/info.js';
import Registry from './src/screens/registry/registry.js';
import Help from './src/screens/help/help.js';
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";

const Stack = createStackNavigator(
  {
    Home: Main,
    Regis: Registry,
    HelpPage: Help,
    InfoPage: Info,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(255, 230, 0)',
      },
      headerTintColor: '#000',
    },
  },
);
const AppContainer = createAppContainer(Stack);
const App = () => {
  return <AppContainer />;
}
export default App;
