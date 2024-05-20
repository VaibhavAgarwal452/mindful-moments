import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { images } from '../../constants';

import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const Index = () => {
  const handlePress = () => {
    router.push('/getName');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='h-full'>
        <View className='h-[100vh] relative'>
          <View className='mx-auto px-4 '>
            <Text className='text-white text-4xl pt-20 text-center'>
              Fuel Your Potential
            </Text>
          </View>

          <View className='mt-7 mx-auto px-2'>
            <Text className='text-secondary text-2xl text-center'>
              Inspire, Motivate, Succeed
            </Text>
          </View>

          <View className='border '>
            <Image
              source={images.introImage}
              className='w-full h-[400px]'
              resizeMode='contain'
            />
          </View>
          <CustomButton
            title='Continue'
            containerStyles={'text-white  w-full absolute bottom-10'}
            handlePress={handlePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
