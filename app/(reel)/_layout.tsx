import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' options={{ headerShown: false }} />
        <Stack.Screen name='profile' options={{ headerShown: false }} />
        <Stack.Screen name='favorite' options={{ headerShown: false }} />
        <Stack.Screen name='addQuote' options={{ headerShown: false }} />
        <Stack.Screen name='myQuotes' options={{ headerShown: false }} />
        <Stack.Screen name='collection' options={{ headerShown: false }} />
        <Stack.Screen name='addCollection' options={{ headerShown: false }} />
        <Stack.Screen name='collectionlist' options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  );
};

export default _layout;
