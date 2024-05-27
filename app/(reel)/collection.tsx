import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Share,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import {
  removeQuotesFromMyQuotesAsync,
  searchMyQuotes,
} from '@/reducers/userSlice';
import { getCollectionsAsync } from '@/reducers/collectionSlice';

const collection = () => {
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user);
  const collection: any = useAppSelector((state) => state.collection);
  const { loading, collections } = collection;
  const [currentQuoteId, setCurrentQuoteId] = useState('');
  const userId = user._id;

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

  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='mt-12 mx-4'>
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
                      router.push('/collectionlist/' + item._id);
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
              <Text>No Collection Found</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default collection;
