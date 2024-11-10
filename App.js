// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AbonnementProvider } from './src/contexts/AbonnementContext';  // Utilise le contexte global
import HomeScreen from './src/screens/HomeScreen';            // Écran d'accueil
import AddSubscriptionScreen from './src/screens/AddSubscriptionScreen'; // Écran pour ajouter un abonnement

// Création de la navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    // Enveloppe l'application avec AbonnementProvider pour partager le contexte
    <AbonnementProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Calendrier des Abonnements' }} />
          <Stack.Screen name="Ajouter Abonnement" component={AddSubscriptionScreen} options={{ title: 'Ajouter un Abonnement' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AbonnementProvider>
  );
}
