import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import Home from './screens/Home';
import Rating from './modals/Rating';
import {theme} from './theme';
import {RootStackParamList} from './types/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import StoreData from './redux/store';

const RootStack = createStackNavigator<RootStackParamList>();
const {store, persistor} = StoreData();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack.Navigator>
              <RootStack.Group>
                <RootStack.Screen name="Home" component={Home} />
              </RootStack.Group>
              <RootStack.Group screenOptions={{presentation: 'modal'}}>
                <RootStack.Screen name="Rating" component={Rating} />
              </RootStack.Group>
            </RootStack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
