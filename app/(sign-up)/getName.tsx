import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import { router } from 'expo-router';

const getName = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const saveuserName = () => {
    dispatch(updateUserData({ name: name, email: email, password: password }));
    router.push('/getGender');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        {/* <View>
          <Text className='text-white text-2xl'>ProgressBar</Text>
        </View> */}
        <View className='relative h-[100vh]'>
          <View className='p-4 '>
            <Text className='text-white text-3xl text-center mt-5 pt-10'>
              Let's take it one step at a time. How do you want to be called
            </Text>
            <Text className='text-gray-100 text-xl text-center mt-5'>
              Your name will be displayed in your motivational quotes
            </Text>
            <View className='pt-6'>
              <FormField
                title='Name'
                placeholder='Your Name'
                handleChangeText={setName}
                value={name}
                otherStyles={'mt-10'}
              />
              <FormField
                title='Email'
                placeholder='Your Email'
                handleChangeText={setEmail}
                value={email}
                otherStyles={'mt-10'}
              />
              <FormField
                title='Password'
                placeholder='Your password'
                handleChangeText={setPassword}
                value={password}
                otherStyles={'mt-10'}
              />
            </View>
          </View>
          <CustomButton
            title='Continue'
            containerStyles={'absolute bottom-10 text-white mt-10 w-full'}
            handlePress={saveuserName}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default getName;
