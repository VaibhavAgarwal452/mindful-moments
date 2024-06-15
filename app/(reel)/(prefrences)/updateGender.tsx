import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserAsync, updateUserData } from '@/reducers/userSlice';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CustomMultiSelectInputButton from '@/components/customMultiSelectButton';

const updateGender = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
    { label: 'Prefer not to say', value: 'preferNotToSay' },
  ];

  const handleGender = (value: any) => {
    dispatch(updateUserAsync({ ...user, gender: value }));
    router.push('/general');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='mt-10 px-7'>
        <View className='flex-row start-1 gap-3 items-center'>
          <Ionicons
            name='arrow-back'
            size={25}
            color='white'
            onPress={() => {
              router.back();
            }}
          />
          <Text className='text-white text-3xl'>Content Prefernces</Text>
        </View>

        <View className='mt-10'>
          <Text className='text-white text-2xl text-center'>
            Nice to Meet you, {user.name}. Which option represents you better
          </Text>
        </View>

        <View className='mb-5 mt-10'>
          {genderOptions.map((option) => (
            <CustomMultiSelectInputButton
              key={option.value}
              title={option.label}
              containerStyles={`border ${
                user.gender !== option.value
                  ? 'border-slate-700'
                  : 'border-white '
              } my-2`}
              handlePress={() => handleGender(option.value)}
              isActive={user.gender === option.value}
            >
              <Text className='text-white text-lg text-center'>
                {option.label}
              </Text>
            </CustomMultiSelectInputButton>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default updateGender;