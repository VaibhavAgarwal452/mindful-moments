import { Image, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const index = () => {
  const handlePress = () => {
    router.push('/intro-screen3');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='flex-1' style={{ marginTop: 100 }}>
        <View className='mx-auto px-4'>
          <Text className='text-white text-4xl text-center'>
            Where Inspiration Meets Innovation
          </Text>
        </View>

        <View className='mt-7 mx-auto px-2'>
          <Text className='text-secondary text-2xl text-center'>
            Transform Your Day, One Quote at a Time
          </Text>
        </View>

        <View>
          <Image
            source={images.introImage}
            className='w-full h-[400px]'
            resizeMode='contain'
          />
        </View>

        <CustomButton
          title='Continue'
          containerStyles={'text-white mt-8 self-end w-full'}
          handlePress={handlePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
