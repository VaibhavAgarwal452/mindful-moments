import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { createUserAsync, updateUserData } from '@/reducers/userSlice';
import CustomInputButton from '../../components/CustomInputButton';
import { router } from 'expo-router';
import Animated from 'react-native-reanimated';
import { SlideInDownAnimation } from '@/constants/animations';
import { feelings } from '@/data';

const GenderSelectionScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleGender = async (value: any) => {
    dispatch(updateUserData({ feelingLately: value }));

    setTimeout(() => {
      dispatch(
        // createUserAsync({
        //   userData: { user: { ...user, feelingLately: value } },
        // })
        createUserAsync({ user: { ...user, feelingLately: value } })
      );

      router.push('/home');
    }, 100);
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <Animated.ScrollView
        className='mt-20 px-7'
        entering={SlideInDownAnimation}
      >
        <View>
          <Text className='text-white text-3xl text-center'>
            How have you been feeling lately?
          </Text>
        </View>

        <View className='mb-5 mt-10'>
          {feelings.map((option) => (
            <CustomInputButton
              key={option.value}
              title={option.label}
              containerStyles={`border border-gray-100 my-2`}
              handlePress={() => handleGender(option.value)}
            >
              <Text className='text-white text-lg text-center'>
                {option.label}
              </Text>
            </CustomInputButton>
          ))}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default GenderSelectionScreen;
