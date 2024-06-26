import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Share,
  Pressable,
  BackHandler,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

import {
  addQuotesToCollectionAsync,
  getCollectionsAsync,
} from '@/reducers/collectionSlice';
import Animated from 'react-native-reanimated';
import { SlideInUpAnimation } from '@/constants/animations';
import { useBackButton } from '@/hooks/useBackButton';

const collection = () => {
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user);
  const collection: any = useAppSelector((state) => state.collection);
  const { loading, collections } = collection;
  const [currentQuoteId, setCurrentQuoteId] = useState('');
  const userId = user._id;
  const quote = useLocalSearchParams();

  const handleBackButton = (): any => {
    router.push('/profile');
    return true;
  };
  useBackButton(handleBackButton);
  useEffect(() => {
    dispatch(getCollectionsAsync({ userId }));
  }, []);

  const handleShare = async (shareText: string) => {
    try {
      const result = await Share.share({
        message: shareText,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const addQuoteToCollection = (collectionId: any) => {
    const quotesData = {
      collectionId: collectionId,
      quoteId: quote._id,
      quote: quote.quote,
      author: quote.author,
    };
    dispatch(addQuotesToCollectionAsync({ quotesData }));
    router.back();
  };

  return (
    <SafeAreaView className='bg-primary h-full'>
      <Animated.View className='mt-8 mx-4' entering={SlideInUpAnimation}>
        <View className='flex-row items-center gap-3'>
          <View className='w-full flex-row items-center gap-3'>
            <Ionicons
              name='arrow-back'
              size={25}
              color='white'
              onPress={() => {
                router.push('/profile');
              }}
            />
            <Text className='text-white text-2xl'>Collections</Text>
          </View>
        </View>

        <View className='h-[80vh] '>
          <ScrollView className='mt-4'>
            {loading ? (
              <Text>Loading...</Text>
            ) : collections && collections.length > 0 ? (
              collections.map((item: any, index: any) => {
                return (
                  <Pressable
                    key={index}
                    className='bg-primary-100 rounded-xl mt-5'
                    onPress={() => {
                      quote?._id
                        ? addQuoteToCollection(item._id)
                        : router.push('/collectionlist/' + item._id);
                    }}
                  >
                    <View className='p-4'>
                      <View className='flex-row justify-between items-center'>
                        <Text className='text-white text-lg'>
                          {item.collectionName}
                        </Text>
                        <AntDesign name='right' size={15} color='white' />
                      </View>
                      <View className='flex-row justify-between mt-2'>
                        <View className='flex-row'>
                          <Text className='text-white text-md'>
                            {item?.quotes?.length} quotes
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                );
              })
            ) : (
              <View className='mt-12'>
                <Text className='text-white text-2xl text-center'>
                  {' '}
                  No Collection Found
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
        <View>
          <CustomButton
            title='Add'
            containerStyles={'text-white mt-5 w-full'}
            handlePress={() => {
              router.push('/addCollection');
            }}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default collection;
