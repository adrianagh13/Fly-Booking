import * as React from 'react';
import { createNativeStackNavigator, HeaderBackButton } from '@react-navigation/native-stack';
import { Date, Destination, FinalDetails, Origin, Passengers, Login, MyFlights, SignUp} from '../screens'

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
      <Stack.Navigator 
          initialRouteName='SignUp'
          screenOptions={{
            headerShown: false
          }}
          >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='MyFlights' component={MyFlights}/>
        <Stack.Screen name='Origin' component={Origin}/>
        <Stack.Screen name='Destination' component={Destination}/>
        <Stack.Screen name='Date' component={Date}/>
        <Stack.Screen name='FinalDetails' component={FinalDetails}/>
        <Stack.Screen name='Passengers' component={Passengers}/>
      </Stack.Navigator>
  );
}

export default Navigate;