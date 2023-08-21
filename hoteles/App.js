import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppNavigator from './appNavigator'; // Asegúrate de que la ruta sea correcta

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import DropDownPicker from 'react-native-dropdown-picker';
// import axios from 'axios';

// const HotelListScreen = () => {
//   const [loading, setLoading] = useState(false);
//   const [hoteles, setHoteles] = useState([]);
//   const url = "https://jsonplaceholder.typicode.com/posts";


//   // http://localhost:3000/api/hotels
//   useEffect(() => {
//     setLoading(true);

//     axios.get(url)
//       .then(response => {
//         setHoteles(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>Lista de Hoteles:</Text>
//       {loading ? (
//         <Text>Cargando hoteles...</Text>
//       ) : (
//         hoteles.map(hotels => (
//           <Text key={hotels.id}>{hotels.id}</Text>
//         ))
//       )}
//       <StatusBar style="auto" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default HotelListScreen;
