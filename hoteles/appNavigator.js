// AppNavigator.js

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HotelListScreen from './HotelListScreen'; // Crear este componente

const AppNavigator = createStackNavigator(
  {
    HotelList: { screen: HotelListScreen }
    //agregar pantallas
  },
  {
    initialRouteName: 'HotelList',
  }
);

export default createAppContainer(AppNavigator);
