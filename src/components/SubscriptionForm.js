// src/components/SubscriptionForm.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function SubscriptionForm({ onSubmit, initialDate }) {
  const [subscriptionName, setSubscriptionName] = useState('');
  const [subscriptionDate, setSubscriptionDate] = useState(initialDate || ''); // Utilise initialDate pour le champ date

  useEffect(() => {
    if (initialDate) {
      setSubscriptionDate(initialDate); // Met à jour le champ de date si une date initiale est passée
    }
  }, [initialDate]);

  const handleAddSubscription = () => {
    if (subscriptionName && subscriptionDate) {
      onSubmit(subscriptionName, subscriptionDate); // Appelle la fonction onSubmit avec les valeurs de l'abonnement
      setSubscriptionName(''); // Réinitialise le champ
      setSubscriptionDate(''); // Réinitialise le champ
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ajouter un Abonnement</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de l'abonnement"
        value={subscriptionName}
        onChangeText={setSubscriptionName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date d'échéance (ex: 2024-12-01)"
        value={subscriptionDate}
        onChangeText={setSubscriptionDate}
      />
      <Button title="Ajouter" onPress={handleAddSubscription} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingLeft: 8, width: '100%' },
});
