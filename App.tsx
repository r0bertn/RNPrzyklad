import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./source/Home.jsx";
import PepeView from "./source/PepeView.jsx";
import NodesView from "./source/NodesView.jsx";

const Stack = createNativeStackNavigator(); // tworzymy obiekt, który przechowuje informacje o tym na jakiej stronie jesteśmy i inne informacje o nawigacji

function App(): JSX.Element {

  return (
  <NavigationContainer>
          <Stack.Navigator screenOptions={{ // opcje nawigacji
		headerShown: false // domyślnie jest nagłówek z nazwą obecnej strony
		}}> 
		{/* tak samo jak w czystym React był Router, ale "name" zamiast "path" */}
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Pepe" component={PepeView} />
			<Stack.Screen name="Nodes" component={NodesView} />	
      </Stack.Navigator>  
   </NavigationContainer>
  );
}

export default App;
