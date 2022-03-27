import React from 'react';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Pattaya_400Regular } from '@expo-google-fonts/pattaya';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Jost_300Light, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

import { Favorites } from './src/pages/Favorites';
import { HotelDescription } from './src/pages/HotelDescription';
import { UserConfig } from './src/pages/UserConfig';
import { UserProps } from './src/pages/UserProps';
import { UserProfile } from './src/pages/UserProfile';
import { CreateProp } from './src/pages/CreateProp';

export default function App() {

  const [fontsValid] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Pattaya_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
    Jost_300Light,
    Jost_600SemiBold
  });

  if (!fontsValid) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}
