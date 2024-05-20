import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { images } from '../constants';

import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
const index = () => {
  // useEffect(() => {
  //   router.push('/home');
  // }, []);
  const handlePress = () => {
    router.push('/intro-screen2');
  };

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='border flex-1 pt-6'>
        <View className='mx-auto px-4 pt-14'>
          <Text className='text-white text-4xl text-center'>
            Welcome to Daily Motivation!
          </Text>
        </View>

        <View className='mt-7 mx-auto px-2'>
          <Text className='text-secondary text-2xl text-center'>
            Where Every Quote Sparks Inspiration!
          </Text>
        </View>

        <View>
          <Image
            source={images.introImage}
            className='w-full h-[400]'
            resizeMode='contain'
          />
        </View>

        <CustomButton
          title='Continue'
          containerStyles={'text-white my-8 self-end w-full'}
          handlePress={handlePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
