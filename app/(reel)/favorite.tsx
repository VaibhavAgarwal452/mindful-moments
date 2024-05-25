import { View, Text, SafeAreaView, ScrollView, Share } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import {
  fetchQuotesByIdsAsync,
  updateSavedQuotes,
} from '@/reducers/quoteSlice';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { removeQuotesFromUserAsync } from '@/reducers/userSlice';
import { AntDesign } from '@expo/vector-icons';

const Favorite = () => {
  const user: any = useAppSelector((state) => state.user);
  const savedQuotes = useAppSelector((state) => state.quotes.savedQuotes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuotesByIdsAsync(user.savedQuotes));
  }, []);

  const handleLike = (quoteId: any) => {
    console.log('heerev');
    const userId = user._id;
    const userData = { userId, quoteId };
    dispatch(removeQuotesFromUserAsync(userData));
    dispatch(updateSavedQuotes(quoteId));
  };
  const handleShare = async (shareText: string) => {
    console.log('inside share');
    try {
      const result = await Share.share({
        message: shareText,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='mt-12 mx-4'>
        <View className='flex-row start-1 gap-3 items-center'>
          <Ionicons
            name='arrow-back'
            size={25}
            color='white'
            onPress={() => {
              router.push('/profile');
            }}
          />
          <Text className='text-white text-2xl'>Favorites</Text>
        </View>
      </View>

      <ScrollView className='mt-6 mx-4'>
        {savedQuotes &&
          savedQuotes &&
          savedQuotes.map((item: any, index: number) => {
            return (
              <View key={index} className='bg-primary-100 rounded-xl mt-5'>
                <View className='p-4'>
                  <View>
                    <Text className='text-white text-lg'>
                      {' '}
                      {index}
                      {item.quote}
                    </Text>
                  </View>
                  <View className='flex-row justify-between mt-2'>
                    <Text className='text-secondary-100 text-sm'> </Text>
                    <View className='flex-row gap-3'>
                      <Fontisto
                        name='heart'
                        size={20}
                        color='white'
                        onPress={() => handleLike(item._id)}
                      />

                      <Feather
                        name='share'
                        size={20}
                        color='white'
                        onPress={() => handleShare(item.quote)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;
