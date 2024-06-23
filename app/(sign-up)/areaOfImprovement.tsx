import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import Entypo from '@expo/vector-icons/Entypo';
import CustomMultiSelectInputButton from '@/components/customMultiSelectButton';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const areasOfImprovementList = [
  {
    label: 'Faith & Spirituality',
    value: 'faith',
    icon: <Entypo name='adjust' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Positive Thinking',
    value: 'positive',
    icon: (
      <MaterialCommunityIcons name='head-lightbulb' size={24} color='white' />
    ),
    isActive: false,
  },
  {
    label: 'Stress & Anxiety',
    value: 'stress',
    icon: (
      <MaterialCommunityIcons name='head-snowflake' size={24} color='white' />
    ),
    isActive: false,
  },
  {
    label: 'Achieving Goals',
    value: 'achievingGoals',
    icon: <AntDesign name='totop' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Self Esteem',
    value: 'selfEsteem',
    icon: <MaterialIcons name='self-improvement' size={24} color='white' />,
    isActive: false,
  },
  {
    label: 'Relationships',
    value: 'relationships',
    icon: <FontAwesome6 name='handshake-simple' size={24} color='white' />,
    isActive: false,
  },
];
const AreaOfImprovementScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [areaOfImprovements, setAreaOfImprovements] = useState<any>(
    areasOfImprovementList
  );
  const [buttonEnabled, setButtonEnabled] = useState(true);
  useEffect(() => {
    const abc = areaOfImprovements.some((item: any) => item.isActive);
    setButtonEnabled(!abc);
  }, [areaOfImprovements]);
  const handleAreaOfImprovements = (value: any) => {
    const tempGenderOptions = areaOfImprovements.map((item: any) => {
      if (item.value === value) {
        item.isActive = !item.isActive;
      }
      return item;
    });
    setAreaOfImprovements([...tempGenderOptions]);
  };

  const handleSubmitButton = () => {
    const selectedValues = areaOfImprovements
      .filter((item: any) => {
        if (item.isActive) {
          return item.value;
        }
      })
      .map((item: any) => item.value);
    dispatch(updateUserData({ areasOfImprovement: selectedValues }));
    router.push('/Reason');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='mt-20 px-7'>
        <View>
          <Text className='text-white text-3xl text-center'>
            What areas of life, would you like to improve?
          </Text>
        </View>

        <View className='mb-5 mt-10'>
          {areaOfImprovements.map((option: any) => (
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
          isLoading={buttonEnabled}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AreaOfImprovementScreen;
