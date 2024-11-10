// src/screens/AddSubscriptionScreen.js
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SubscriptionForm from '../components/SubscriptionForm';
import { AbonnementContext } from '../contexts/AbonnementContext';

export default function AddSubscriptionScreen({ navigation, route }) {
  const { addAbonnement } = useContext(AbonnementContext);
  const [subscriptionDate, setSubscriptionDate] = useState('');  // Ajout du state pour la date

  useEffect(() => {
    // Si une date est passée en paramètre, on la définit comme valeur initiale
    if (route.params?.selectedDate) {
      setSubscriptionDate(route.params.selectedDate); // Remplir le champ de la date avec la date sélectionnée
    }
  }, [route.params?.selectedDate]);

  const handleFormSubmit = (name, date) => {
    addAbonnement(name, date);
    navigation.goBack(); // Retour à l'écran précédent
  };

  return (
    <View style={styles.container}>
      <SubscriptionForm
        onSubmit={handleFormSubmit}
        initialDate={subscriptionDate} // Passe la date initiale au formulaire
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
});
