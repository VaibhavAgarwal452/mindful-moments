import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import { fetchQuotesByIdsAsync } from '@/reducers/quoteSlice';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Favorite = () => {
  const user: any = useAppSelector((state) => state.user);
  const savedQuotes = useAppSelector((state) => state.quotes.savedQuotes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuotesByIdsAsync(user.savedQuotes));
  }, []);
  console.log(savedQuotes.length, 'savedQuotes', user.savedQuotes.length);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='mt-12 mx-4'>
        <View className='flex-row start-1 gap-3 items-center'>
          <Ionicons
            name='arrow-back'
            size={35}
            color='white'
            onPress={() => {
              router.push('/profile');
            }}
          />
          <Text className='text-white text-3xl'>Favorites</Text>
        </View>
      </View>

      <ScrollView className='mt-6'>
        {savedQuotes &&
          savedQuotes &&
          savedQuotes.map((item: any, index: number) => {
            return (
              <View key={index} className='bg-primary-100 rounded-xl mt-5'>
                <View className='p-4'>
                  <View>
                    <Text className='text-white text-lg'>{item.quote}</Text>
                  </View>
                  <View className='flex-row justify-between mt-2'>
                    <Text className='text-secondary-100 text-sm'> </Text>
                    <View className='flex-row gap-2'>
                      <Fontisto
                        name='heart'
                        size={20}
                        color='white'
                        onPress={
                          () => {}
                          // handleLike(
                          //   quotesRedux[currentQuoteIndex]._id,
                          //   'remove'
                          // )
                        }
                      />

                      <Feather
                        name='share'
                        size={20}
                        color='white'
                        // onPress={handleShare}
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
