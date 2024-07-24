import { View, Text, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardTypes,
  placeholder,
  type,
  customError,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium`}>{title}</Text>

      <View
        className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center ${
          customError?.value && 'border border-2 border-red-500'
        }`}
      >
        <TextInput
          className={`flex-1 w-full h-full text-white font-psemibold`}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          placeholderTextColor={'#ccc'}
          {...props}
        />

        {title === 'Password' && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <Feather name='eye' size={24} color='white' />
            ) : (
              <Feather name='eye-off' size={24} color='white' />
            )}
          </Pressable>
        )}
      </View>
      {customError?.message && (
        <Text className='text-sm text-red-500'>{customError?.message}</Text>
      )}
    </View>
  );
};

export default FormField;
