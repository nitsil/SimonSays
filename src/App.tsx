import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {store} from './global/store';
import Ratings from './modals/Ratings';
import Home from './screens/Home';
import {theme} from './theme';
import {RootStackParamList} from './types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Group>
              <RootStack.Screen name="Home" component={Home} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{presentation: 'modal'}}>
              <RootStack.Screen name="Ratings" component={Ratings} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
