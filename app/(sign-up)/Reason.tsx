import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import Entypo from '@expo/vector-icons/Entypo';
import CustomMultiSelectInputButton from '@/components/customMultiSelectButton';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
const reasonForImprovementList = [
  {
    label: 'Family',
    value: 'family',
    icon: <Fontisto name='home' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Friends',
    value: 'friends',
    icon: <FontAwesome6 name='handshake-slash' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Work',
    value: 'work',
    icon: <MaterialIcons name='work' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Health',
    value: 'health',
    icon: <MaterialIcons name='health-and-safety' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Relationship',
    value: 'relationship',
    icon: <FontAwesome name='heartbeat' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Other',
    value: 'other',
    icon: <Entypo name='dots-three-horizontal' size={24} color='white' />,
    isActive: false,
  },
];
const reasonForImprovementScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [reasonForImprovement, setReasonForImprovement] = useState<any>(
    reasonForImprovementList
  );

  const handleAreaOfImprovements = (value: any) => {
    const tempReasonOptions = reasonForImprovement.map((item: any) => {
      if (item.value === value) {
        item.isActive = !item.isActive;
      }
      return item;
    });
    setReasonForImprovement([...tempReasonOptions]);
  };

  const handleSubmitButton = () => {
    const selectedValues = reasonForImprovement.map((item: any) => item.value);
    dispatch(updateUserData({ reasonForImprovement: selectedValues }));
    router.push('/feelingLately');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='mt-20 px-7'>
        <View>
          <Text className='text-white text-3xl text-center'>
            What is making you feel that way
          </Text>
        </View>

        <View className='mb-5 mt-10'>
          {reasonForImprovement.map((option: any) => (
            <CustomMultiSelectInputButton
              key={option.value}
              title={option.label}
              containerStyles={`border ${
                !option.isActive ? 'border-slate-700' : 'border-white '
              } my-2`}
              handlePress={() => handleAreaOfImprovements(option.value)}
              isActive={option.isActive}
              Icon={option.icon}
            />
          ))}
        </View>

        <CustomButton
          title='Continue'
          containerStyles={'text-white mt-10 w-full'}
          handlePress={handleSubmitButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default reasonForImprovementScreen;
