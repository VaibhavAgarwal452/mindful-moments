import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { images } from '../constants';

import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';

const index = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      dispatch(updateUserData(JSON.parse(user)));
      router.push('/home');
    }
  };
  const handlePress = () => {
    router.push('/intro-screen2');
    // router.push('/home');
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
