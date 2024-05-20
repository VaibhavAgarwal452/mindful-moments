import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const IntroLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='intro-screen2' options={{ headerShown: false }} />
        <Stack.Screen name='intro-screen3' options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  );
};

export default IntroLayout;
