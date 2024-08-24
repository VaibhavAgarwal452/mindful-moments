import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import { Link, router } from 'expo-router';
import { checkIfUserEmailExists } from '@/reducers/userAPI';
import { checkValidEmail } from '@/common/utils';
import Animated from 'react-native-reanimated';
import { SlideInDownAnimation } from '@/constants/animations';
import { usePushNotifications } from '@/hooks/usePushNotifications';

const getName = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState({ value: false, message: '' });
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState({
    value: false,
    message: '',
  });
  const [continueLoading, setContinueLoading] = useState(false);
  const { expoPushToken } = usePushNotifications();

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

  const saveuserName = async () => {
    setContinueLoading(true);
    if (checkValidEmail(email) && password.length >= 8) {
      const { data } = await checkIfUserEmailExists(email);
      if (data) {
        setEmailError({ value: true, message: 'Email Already Exists' });
      } else {
        dispatch(
          updateUserData({
            name: name,
            email: email,
            password: password,
            expoPushToken: expoPushToken?.data,
          })
        );
        router.push('/getGender');
      }
      setContinueLoading(false);
    } else {
      if (!checkValidEmail(email)) {
        setEmailError({
          value: true,
          message: 'Please enter correct email Address',
        });
        setContinueLoading(false);
      }
      if (password.length < 8) {
        setPasswordError({
          value: true,
          message: 'Please enter the password with 8 digits',
        });
      }
    }
  };

  return (
    <SafeAreaView className='bg-primary h-full'>
      <Animated.ScrollView entering={SlideInDownAnimation}>
        <View className='relative'>
          <View className='p-4'>
            <Text className='text-white text-2xl text-center mt-5'>
              Let's take it one step at a time. How do you want to be called
            </Text>
            <Text className='text-gray-100 text-xl text-center mt-5'>
              Your name will be displayed in your motivational quotes
            </Text>
            <View className='pt-4'>
              <FormField
                title='Name'
                placeholder='Your Name'
                handleChangeText={setName}
                value={name}
                otherStyles={'mt-6'}
              />
              <FormField
                title='Email'
                placeholder='Your Email'
                handleChangeText={setEmail}
                value={email}
                otherStyles={`mt-6`}
                customError={emailError}
              />
              <FormField
                title='Password'
                placeholder='Your password'
                handleChangeText={setPassword}
                value={password}
                otherStyles={'mt-6'}
              />
            </View>
          </View>
          <CustomButton
            title='Continue'
            containerStyles={'text-white mt-10 mb-5 w-full'}
            handlePress={saveuserName}
            loading={continueLoading}
          />
          <View className='flex-row mb-10 justify-center'>
            <Text className='text-md text-white'>
              Already have an account{' '}
              <Link href='/login' className='text-blue-500'>
                Login
              </Link>
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default getName;
