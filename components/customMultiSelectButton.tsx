import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const CustomMultiSelectInputButton = ({
  title,
  containerStyles,
  handlePress,
  textStyles,
  Icon,
  isActive,
}: any) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`rounded-xl flex flex-row min-h-[62px] justify-between items-center px-5 ${containerStyles}`}
    >
      <View className='flex flex-row items-center'>
        <View>{Icon}</View>
        <Text className={`text-white font-psemibold text-lg p-2`}>{title}</Text>
      </View>
      {isActive && (
        <AntDesign
          name='checkcircle'
          size={24}
          color='white'
          className='self-end'
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomMultiSelectInputButton;
