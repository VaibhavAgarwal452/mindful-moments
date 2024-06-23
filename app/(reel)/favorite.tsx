import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Share,
  TextInput,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import {
  fetchQuotesByIdsAsync,
  updateSavedQuotes,
  searchSavedQuotes,
  addQuoteToQuotes,
} from '@/reducers/quoteSlice';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { removeQuotesFromUserAsync } from '@/reducers/userSlice';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { getQuotesIdsForCurrentUSer } from '@/common/utils';
import { FontAwesome } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import {
  SlideInLeftAnimation,
  SlideInUpAnimation,
} from '@/constants/animations';

const Favorite = () => {
  const user: any = useAppSelector((state) => state.user);
  const savedQuotes = useAppSelector((state) => state.quotes.savedQuotes);
  const collection: any = useAppSelector((state) => state.collection);

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
  const quoteIdsForCollections = getQuotesIdsForCurrentUSer(
    collection.collections
  );
  const handleLike = (quoteId: any) => {
    const userId = user._id;
    const userData = { userId, quoteId };
    dispatch(removeQuotesFromUserAsync(userData));
    dispatch(updateSavedQuotes(quoteId));
  };
  const handleShare = async (shareText: string) => {
    try {
      const result = await Share.share({
        message: shareText,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleCollection = (quote: any) => {
    router.push({ pathname: '/collection', params: quote });
  };
  const checkIfQuoteIsInCollection = (quoteId: any) => {
    return quoteIdsForCollections.includes(quoteId);
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <Animated.View className='mt-12 mx-4' entering={SlideInUpAnimation}>
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
          <View className='w-[80%] '>
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
      </Animated.View>

      <Animated.ScrollView
        className='my-6 mx-4'
        entering={SlideInLeftAnimation}
      >
        {!inputText
          ? savedQuotes &&
            savedQuotes.map((item: any, index: number) => {
              return (
                <Pressable
                  key={index}
                  className='bg-primary-100 rounded-xl mt-5'
                  onPress={() => {
                    dispatch(addQuoteToQuotes(item));
                    router.push({
                      pathname: `/quotesList`,
                      params: { page: 'favorite', category: '' },
                    });
                  }}
                >
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
                        {checkIfQuoteIsInCollection(item._id) ? (
                          <FontAwesome
                            name='bookmark'
                            size={20}
                            color='white'
                            onPress={() => {
                              // handleCollection(item._id);
                            }}
                          />
                        ) : (
                          <Feather
                            name='bookmark'
                            size={20}
                            color='white'
                            onPress={() => {
                              handleCollection(item);
                            }}
                          />
                        )}
                        <Feather
                          name='share'
                          size={20}
                          color='white'
                          onPress={() => handleShare(item.quote)}
                        />
                      </View>
                    </View>
                  </View>
                </Pressable>
              );
            })
          : searchedSavedQuotes.map((item: any, index: any) => {
              return (
                <Pressable
                  key={index}
                  className='bg-primary-100 rounded-xl mt-5'
                  onPress={() => {
                    dispatch(addQuoteToQuotes(item));
                    router.push({
                      pathname: `/quotesList`,
                      params: { page: 'favorite', category: '' },
                    });
                  }}
                >
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
                          name='bookmark'
                          size={20}
                          color='white'
                          onPress={() => {
                            handleCollection(item);
                          }}
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
                </Pressable>
              );
            })}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;
