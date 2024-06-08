import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { createUserAsync, updateUserData } from '@/reducers/userSlice';
import CustomInputButton from '../../components/CustomInputButton';
import { router } from 'expo-router';

const GenderSelectionScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const feelings = [
    {
      label: 'Awesome',
      value: 'awesome',
    },
    { label: 'Good', value: 'good' },
    { label: 'Ok', value: 'ok' },
    { label: 'Bad', value: 'bad' },
    { label: 'Terrible', value: 'terrible' },
    { label: 'Other', value: 'other' },
  ];

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
      <ScrollView className='mt-20 px-7'>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default GenderSelectionScreen;
