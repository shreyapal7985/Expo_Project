import { View, Text } from 'react-native'
import React from 'react';
import { Redirect, Slot } from 'expo-router';
export default function _Layout() {
  const isAuthenticated = false;
  if(!isAuthenticated) return <Redirect href="/auth/sign-in"/>
  /* 
    Yahan hum <Slot/> use kar rahe hain taaki yeh folder ek simple layout 
    container ki tarah act kare aur iske andar ki index.tsx file default 
    home screen ki tarah render ho, bina bottom tabs bar ke.
  */
return <Slot />
}

