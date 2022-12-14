import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './src/pages/login/index';
import Car from './src/pages/Steps/car';
import Payment from './src/pages/Steps/payment';
import Home from './src/pages/Home';
import Tabel from './src/pages/tabel/tabel';
import Card from './src/pages/tabel/card';
import Ride from './src/pages/ride/ride';
import MapScreen from './src/pages/ride/MapScreen';
import Way from './src/pages/way/way';
/* 
  Login
  - Home
    - Cadastrar pagamento
      - Volta pra home depois de cadastrado
    - Cadastrar viagem (opção somente para motoristas)
       - Vai pra uma tela que lista os passageiros que querem carona
    - Pegar carona (todos vêem essa opção)
      - Clicando nessa opção, vai para uma tela perguntando o destino
         - Vai pra tela de card, filtrada pelo destino
*/
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Car" component={Car} />
          <Stack.Screen name="Tabel" component={Tabel} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Ride" component={Ride} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="Way" component={Way} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>  
  );
}
