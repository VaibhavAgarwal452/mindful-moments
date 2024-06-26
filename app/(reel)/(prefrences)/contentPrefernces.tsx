import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserAsync } from '@/reducers/userSlice';
import CustomMultiSelectInputButton from '@/components/customMultiSelectButton';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { SlideInUpAnimation } from '@/constants/animations';
import { areasOfImprovementList } from '../../../data';

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
      <Animated.ScrollView className='mt-12 px-7' entering={SlideInUpAnimation}>
        <View className='flex-row start-1 gap-3 items-center'>
          <Ionicons
            name='arrow-back'
            size={30}
            color='white'
            onPress={() => {
              router.back();
            }}
          />
          <Text className='text-white text-3xl'>Content Preferences</Text>
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
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ContentPrefernces;
