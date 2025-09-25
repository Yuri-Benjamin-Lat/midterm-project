import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ReservationContext = createContext();

export function useReservations() {
  return useContext(ReservationContext);
}

export function ReservationProvider({ children }) {
  const [reservations, setReservations] = useLocalStorage('studySpotReservations', []);

  const addReservation = (reservation) => {
    const newReservation = {
      ...reservation,
      id: Date.now(), // Unique ID for each reservation
      status: 'confirmed'
    };
    setReservations(prev => [...prev, newReservation]);
    return newReservation;
  };

  const cancelReservation = (reservationId) => {
    setReservations(prev => prev.filter(res => res.id !== reservationId));
  };

  const getUserReservations = (userId) => {
    return reservations.filter(res => res.userId === userId);
  };

  const value = {
    reservations,
    addReservation,
    cancelReservation,
    getUserReservations
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}