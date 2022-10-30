import React, {useState, type PropsWithChildren} from 'react';
import {
  Image,
  Text,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import SignIn from './src/components/views/SignIn';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
