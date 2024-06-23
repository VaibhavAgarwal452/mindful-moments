import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserAsync, updateUserData } from '@/reducers/userSlice';
import Entypo from '@expo/vector-icons/Entypo';
import CustomMultiSelectInputButton from '@/components/customMultiSelectButton';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

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

const ContentPrefernces = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [areaOfImprovements, setAreaOfImprovements] = useState<any>(
    areasOfImprovementList
  );

  useEffect(() => {
    const tempAreaOfImprovements = areaOfImprovements.map((item: any) => {
      if (user?.areasOfImprovement?.includes(item?.value)) {
        return { ...item, isActive: true };
      }
      return item;
    });
    setAreaOfImprovements(tempAreaOfImprovements);
  }, []);
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
    // dispatch(updateUserData({ areasOfImprovement: selectedValues }));
    dispatch(updateUserAsync({ ...user, areasOfImprovement: selectedValues }));
    router.push('/general');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='mt-12 px-7'>
        <View className='flex-row start-1 gap-3 items-center'>
          <Ionicons
            name='arrow-back'
            size={30}
            color='white'
            onPress={() => {
              router.back();
            }}
          />
          <Text className='text-white text-3xl'>Content Prefernces</Text>
        </View>
        <View className='mt-5'>
          <Text className='text-white text-2xl text-center'>
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
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContentPrefernces;
