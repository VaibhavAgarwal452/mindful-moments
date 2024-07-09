import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { loginAsync, updateUserData } from '@/reducers/userSlice';
import { router, Link } from 'expo-router';
import { checkValidEmail } from '@/common/utils';

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState({ value: false, message: '' });
  const [loginError, setLoginError] = useState({ value: false, message: '' });
  const user: any = useAppSelector((state) => state.user);

  const login = async () => {
    if (checkValidEmail(email)) {
      dispatch(loginAsync({ email, password }));
    } else {
      if (!checkValidEmail(email)) {
        setEmailError({
          value: true,
          message: 'Please enter correct email Address',
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
    setLoginError({ value: false, message: '' });
  }, [email, password]);

  useEffect(() => {
    if (user._id) {
      router.push('/home');
    }
    if (user.error) {
      setLoginError({ value: true, message: user.error });
    }
  }, [user]);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='relative'>
          <View className='p-4'>
            <Text className='text-white text-3xl text-center mt-5'>Login</Text>
            <Text className='text-gray-100 text-xl text-center mt-5'>
              Your name will be displayed in your motivational quotes
            </Text>
            <View className='pt-6'>
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
                // customError={passwordError}
              />
            </View>
          </View>
          {loginError.value && (
            <Text className='mx-6 text-lg text-red-500'>
              {loginError.message}
            </Text>
          )}
          <CustomButton
            title='Continue'
            containerStyles={'text-white my-10 w-full'}
            handlePress={login}
          />
          <View className='flex-row mb-10 justify-center'>
            <Text className='text-md text-white'>
              Create an Account{' '}
              <Link href='/getName' className='text-blue-500'>
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
