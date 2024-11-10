// src/contexts/AbonnementContext.js
import React, { createContext, useState } from 'react';

// Crée un contexte pour les abonnements
export const AbonnementContext = createContext();

export function AbonnementProvider({ children }) {
  const [abonnements, setAbonnements] = useState([]);

  // Fonction pour ajouter un nouvel abonnement
  const addAbonnement = (name, date) => {
    setAbonnements([...abonnements, { name, date }]);
  };

  return (
    <AbonnementContext.Provider value={{ abonnements, addAbonnement }}>
      {children}
    </AbonnementContext.Provider>
  );
}
