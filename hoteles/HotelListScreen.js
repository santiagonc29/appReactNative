// HotelListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';

const HotelListScreen = ({ navigation }) => {
  const [hotels, setHotels] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    // Realiza una solicitud inicial a la API para obtener todos los hoteles
    fetchHotels();
  }, []);

  const fetchHotels = () => {
    const apiUrl = filter
      ? `http://localhost:3000/api/hotels/${filter}`
      : 'http://localhost:3000/api/hotels';

    axios.get(apiUrl)
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleFilter = stars => {
    setFilter(stars);
    fetchHotels();
  };

  return (
    <View>
    <Text>Bienvenido</Text>
      <Button title="Filtrar por 3 estrellas" onPress={() => handleFilter(3)} />
      <Button title="Mostrar todos los hoteles" onPress={() => handleFilter(null)} />
      <FlatList
        data={hotels}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.stars} estrellas</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HotelListScreen;
