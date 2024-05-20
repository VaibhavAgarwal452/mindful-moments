import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { isLoading } from 'expo-font';

const CustomInputButton = ({
  title,
  containerStyles,
  handlePress,
  textStyles,
  isLoading,
}: any) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`rounded-xl min-h-[62px] justify-center items-start px-5 ${containerStyles}`}
    >
      <Text className={`text-white font-psemibold text-lg p-2`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomInputButton;
