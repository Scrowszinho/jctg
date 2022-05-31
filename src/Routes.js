import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Call from './screens/Call';
import ListCall from './screens/ListCall';
import Home from './screens/Home';
import Login from './screens/Login';
import CallDetails from './screens/CallDetails';

export default function Routes(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login'
            component={Login} 
            options={{
                headerShown: false,
            }}
            />
             <Stack.Screen
            name='Home'
            component={Home}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name='New-Call'
            options={{
                title: 'Novo chamado',
            }}
            component={Call}
            />
            <Stack.Screen 
            name='List-Call'
            options={{
                title: 'Histórico de chamados',
            }}
            component={ListCall} />
            <Stack.Screen 
            name='Details-Call'
            options={{headerShown: false}}
            component={CallDetails} />
        </Stack.Navigator>
    );
}