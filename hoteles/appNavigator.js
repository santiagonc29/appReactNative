// AppNavigator.js

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HotelListScreen from './HotelListScreen'; // Crear este componente

const AppNavigator = createStackNavigator(
  {
    HotelList: { screen: HotelListScreen },
    // Agrega otras pantallas aquí si es necesario
  },
  {
    initialRouteName: 'HotelList',
  }
);

export default createAppContainer(AppNavigator);
