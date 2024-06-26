import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useAppDispatch } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import CustomMultiSelectInputButton from '@/components/customMultiSelectButton';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import Animated from 'react-native-reanimated';
import { SlideInDownAnimation } from '@/constants/animations';
import { reasonForImprovementList } from '@/data';

const reasonForImprovementScreen = () => {
  const dispatch = useAppDispatch();
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const [reasonForImprovement, setReasonForImprovement] = useState<any>(
    reasonForImprovementList
  );
  useEffect(() => {
    const abc = reasonForImprovement.some((item: any) => item.isActive);
    setButtonEnabled(!abc);
  }, [reasonForImprovement]);
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
    const selectedValues = reasonForImprovement
      .filter((item: any) => {
        if (item.isActive) {
          return item.value;
        }
      })
      .map((item: any) => item.value);
    dispatch(updateUserData({ reasonForImprovement: selectedValues }));
    router.push('/feelingLately');
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <Animated.ScrollView
        className='mt-20 px-7'
        entering={SlideInDownAnimation}
      >
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
          isLoading={buttonEnabled}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default reasonForImprovementScreen;
