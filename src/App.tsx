import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import Home from './screens/Home';
import Rating from './screens/Rating';
import {theme} from './theme';
import {RootStackParamList} from './types/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import StoreData from './redux/store';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const RootStack = createStackNavigator<RootStackParamList>();
const {store, persistor} = StoreData();
const RatingButton = styled.TouchableOpacity`
  padding-horizontal: ${({theme}) => theme.spacing.l}px;
  padding-vertical: ${({theme}) => theme.spacing.s}px;
  margin-horizontal: ${({theme}) => theme.spacing.xl}px;
  border-radius: ${({theme}) => theme.spacing.s}px;
  background-color: ${({theme}) => theme.colors.lightBlue};
`;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack.Navigator>
              <RootStack.Group>
                <RootStack.Screen
                  name="Home"
                  component={Home}
                  options={({navigation, route}) => ({
                    headerTitle: () => (
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 20,
                        }}>
                        Simon Says
                      </Text>
                    ),
                    headerRight: () => (
                      <RatingButton
                        onPress={() => navigation.navigate('Rating')}>
                        <Text style={{fontSize: 14, color: 'black'}}>
                          Rating
                        </Text>
                      </RatingButton>
                    ),
                  })}
                />
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
