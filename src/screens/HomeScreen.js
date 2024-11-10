// src/screens/HomeScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AbonnementContext } from '../contexts/AbonnementContext';

export default function HomeScreen({ navigation }) {
  const { abonnements } = useContext(AbonnementContext);
  const [selectedDate, setSelectedDate] = useState(''); // État pour la date sélectionnée

  // Prépare les dates marquées pour le calendrier
  const markedDates = abonnements.reduce((acc, abonnement) => {
    acc[abonnement.date] = { marked: true, dotColor: 'blue' };
    return acc;
  }, {});

  // Ajoute la date sélectionnée dans les dates marquées pour la mettre en surbrillance
  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, selectedColor: 'orange' };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendrier des Abonnements</Text>

      <Calendar
        markedDates={markedDates} // Affiche les dates marquées, y compris la date sélectionnée
        onDayPress={(day) => {
          setSelectedDate(day.dateString); // Met à jour l'état avec la date sélectionnée
          console.log("Date sélectionnée :", day.dateString); // Affiche la date sélectionnée dans la console
        }}
      />

      <Text style={styles.selectedDateText}>
        Date sélectionnée : {selectedDate || 'Aucune'}
      </Text>

      <Button
        title="Ajouter un abonnement"
        onPress={() => navigation.navigate('Ajouter Abonnement', { selectedDate })} // Passe la date sélectionnée à l'écran d'ajout
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  selectedDateText: { fontSize: 18, marginTop: 10, color: 'gray' },
});
