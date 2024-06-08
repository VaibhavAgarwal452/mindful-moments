import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='general' options={{ headerShown: false }} />
        <Stack.Screen
          name='contentPrefernces'
          options={{ headerShown: false }}
        />
        <Stack.Screen name='updateGender' options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor='#161622' style='light' />
    </>
  );
};

export default _layout;
