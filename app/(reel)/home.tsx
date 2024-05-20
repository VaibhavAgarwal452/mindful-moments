import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { quotes } from '../../data';
import CustomButton from '@/components/CustomButton';

const home = () => {
  const [quotesList, setQuotesList] = useState(quotes);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className=''>
        <View className='border h-[100vh]'>
          <View className='flex-1 items-center justify-center '>
            {quotesList.map((quote: any, index: any) => {
              if (index === currentQuoteIndex) {
                return (
                  <>
                    <Text className='justify-center items-center italic  px-4  text-white text-2xl'>
                      {quotes[currentQuoteIndex].quote}
                    </Text>
                    <Text className='text-secondary-100 text-lg mt-4'>
                      {quotes[currentQuoteIndex].quote &&
                        ' - ' + quotes[currentQuoteIndex].author}
                    </Text>
                  </>
                );
              }
            })}
          </View>
          <CustomButton
            title={'Next Quote'}
            className=''
            handlePress={() => setCurrentQuoteIndex((index) => index + 1)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
