import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Share,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import {
  fetchQuotesByIdsAsync,
  updateSavedQuotes,
  searchSavedQuotes,
} from '@/reducers/quoteSlice';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { removeQuotesFromUserAsync } from '@/reducers/userSlice';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Favorite = () => {
  const user: any = useAppSelector((state) => state.user);
  const savedQuotes = useAppSelector((state) => state.quotes.savedQuotes);
  const searchedSavedQuotes = useAppSelector(
    (state) => state.quotes.searchedSavedQuotes
  );
  const dispatch = useAppDispatch();
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    dispatch(fetchQuotesByIdsAsync(user.savedQuotes));
  }, []);

  useEffect(() => {
    const searchQuote = setTimeout(() => {
      if (inputText) {
        dispatch(searchSavedQuotes(inputText));
      }
    }, 100);

    return () => clearTimeout(searchQuote);
  }, [inputText]);

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
  console.log(searchedSavedQuotes, 'searchedSavedQ');
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='mt-12 mx-4'>
        <View className='flex-row items-center gap-3'>
          <View className='w-[10%]'>
            <Ionicons
              name='arrow-back'
              size={25}
              color='white'
              onPress={() => {
                if (searchInputVisible) {
                  setSearchInputVisible(false);
                } else {
                  router.push('/profile');
                }
              }}
            />
          </View>
          <View className=' w-[80%] '>
            {searchInputVisible ? (
              <View className='w-full h-12 px-4 bg-primary-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center'>
                <TextInput
                  className='flex-1 w-full text-white font-psemibold'
                  value={inputText}
                  placeholder={'Search Saved Quotes'}
                  onChangeText={(e) => setInputText(e)}
                  placeholderTextColor={'#cccccc'}
                  clearButtonMode='always'
                />
                <TouchableHighlight
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  underlayColor='transparent'
                >
                  <View>
                    <Entypo
                      name='cross'
                      size={24}
                      color='white'
                      onPress={() => setInputText('')}
                    />
                  </View>
                </TouchableHighlight>
              </View>
            ) : (
              <View className='flex-row w-auto justify-between'>
                <Text className='text-white text-2xl'>Favorites</Text>
                <AntDesign
                  name='search1'
                  size={25}
                  color='white'
                  onPress={() => setSearchInputVisible(true)}
                />
              </View>
            )}
          </View>
        </View>
      </View>

      <ScrollView className='mt-6 mx-4'>
        {!inputText
          ? savedQuotes &&
            savedQuotes.map((item: any, index: number) => {
              return (
                <View key={index} className='bg-primary-100 rounded-xl mt-5'>
                  <View className='p-4'>
                    <View>
                      <Text className='text-white text-lg'>{item.quote}</Text>
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
            })
          : searchedSavedQuotes.map((item: any, index: any) => {
              return (
                <View key={index} className='bg-primary-100 rounded-xl mt-5'>
                  <View className='p-4'>
                    <View>
                      <Text className='text-white text-lg'>{item.quote}</Text>
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
