import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import CustomMultiSelectInputButton from '@/components/customMultiSelectButton';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import Animated from 'react-native-reanimated';
import { SlideInDownAnimation } from '@/constants/animations';
import { areasOfImprovementList } from '@/data';

const AreaOfImprovementScreen = () => {
  const dispatch = useAppDispatch();
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
      <Animated.ScrollView
        className='mt-20 px-7'
        entering={SlideInDownAnimation}
      >
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
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default AreaOfImprovementScreen;
