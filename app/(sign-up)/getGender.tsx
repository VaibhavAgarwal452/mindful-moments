import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { styled } from 'nativewind';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import CustomInputButton from '../../components/CustomInputButton';
import { router } from 'expo-router';

const GenderSelectionScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
    { label: 'Prefer not to say', value: 'preferNotToSay' },
  ];

  const handleGender = (value: any) => {
    dispatch(updateUserData({ gender: value }));
    router.push('/areaOfImprovement');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='mt-20 px-7'>
        <View>
          <Text className='text-white text-3xl text-center'>
            Nice to Meet you, {user.name}. Which option represents you better
          </Text>
        </View>

        <View className='mb-5 mt-10'>
          {genderOptions.map((option) => (
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default GenderSelectionScreen;
