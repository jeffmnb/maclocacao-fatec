import React from 'react';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Pattaya_400Regular } from '@expo-google-fonts/pattaya';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

import { Favorites } from './src/pages/Favorites';
import { HotelDescription } from './src/pages/HotelDescription';
import { UserConfig } from './src/pages/UserConfig';

export default function App() {

  const [fontsValid] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Pattaya_400Regular,
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsValid) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}
