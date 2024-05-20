import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='getName' options={{ headerShown: false }} />
        <Stack.Screen name='getGender' options={{ headerShown: false }} />
        <Stack.Screen
          name='areaOfImprovement'
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Reason' options={{ headerShown: false }} />
        <Stack.Screen name='feelingLately' options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  );
};

export default _layout;
