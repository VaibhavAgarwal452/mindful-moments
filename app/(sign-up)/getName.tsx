import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import { router } from 'expo-router';
import { checkIfUserEmailExists } from '@/reducers/userAPI';
import { checkValidEmail } from '@/common/utils';

const getName = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState({ value: false, message: '' });
  const [passwordError, setPasswordError] = useState({
    value: false,
    message: '',
  });
  const saveuserName = async () => {
    if (checkValidEmail(email) && password.length > 8) {
      const { data }: any = await checkIfUserEmailExists(email);
      if (data.statusCode === 200) {
        dispatch(
          updateUserData({ name: name, email: email, password: password })
        );
        router.push('/getGender');
      } else {
        setEmailError({ value: true, message: 'Email Already Exists' });
      }
    } else {
      console.log('workds');
      if (!checkValidEmail(email)) {
        console.log('heer');
        setEmailError({
          value: true,
          message: 'Please enter correct email Address',
        });
      }
      if (password.length < 8) {
        setPasswordError({
          value: true,
          message: 'Please enter the password with 8 digits',
        });
      }
    }
  };

  useEffect(() => {
    if (email) {
      setEmailError({ value: false, message: '' });
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      setPasswordError({ value: false, message: '' });
    }
  }, [password]);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='relative'>
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
                otherStyles={`mt-10`}
                customError={emailError}
              />
              <FormField
                title='Password'
                placeholder='Your password'
                handleChangeText={setPassword}
                value={password}
                otherStyles={'mt-10'}
                customError={passwordError}
              />
            </View>
          </View>
          <CustomButton
            title='Continue'
            containerStyles={'text-white my-10 w-full'}
            handlePress={saveuserName}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default getName;
