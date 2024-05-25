import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  Share,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { quotes } from '../../data';
import CustomButton from '@/components/CustomButton';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { createUserAsync, selectUserData } from '@/reducers/userSlice';
import { Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { fetchQuotesAsync } from '@/reducers/quoteSlice';
import {
  addQuoteToUserAsync,
  removeQuotesFromUserAsync,
} from '@/reducers/userSlice';
// import Share from 'react-native-share';

const home = () => {
  // const [quotesList, setQuotesList] = useState<any>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user);
  const quotesRedux: any = useAppSelector((state) => state.quotes.quotes);
  const userId = user._id;
  useEffect(() => {
    if (
      currentQuoteIndex === 0 ||
      currentQuoteIndex === quotesRedux.length - 3
    ) {
      // getPosts();
      dispatch(fetchQuotesAsync());
    }
  }, [currentQuoteIndex]);

  const handleLike = (quoteId: any, value: any) => {
    const userData = { userId, quoteId };
    if (value === 'add') {
      addQuoteToUserSavedQuotes(userData);
    } else {
      removeQuoteToUserSavedQuotes(userData);
    }
  };
  const addQuoteToUserSavedQuotes = (userData: any) => {
    dispatch(addQuoteToUserAsync(userData));
    setLiked(!liked);
    ToastAndroid.show('Quote add to saved quotes!', ToastAndroid.SHORT);
  };

  const removeQuoteToUserSavedQuotes = (userData: any) => {
    dispatch(removeQuotesFromUserAsync(userData));
    setLiked(!liked);
  };

  const handleQuoteChange = () => {
    setCurrentQuoteIndex((index) => index + 1);
    setLiked(false);
  };

  const handleShare = async () => {
    const options = {
      message:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, pariatur dignissimos molestiae similique recusandae natus. Asperiores aspernatur optio, voluptates ea tempore et cupiditate ratione accusamus fuga, molestias odio dolorum in?',
    };

    try {
      const result = await Share.share({
        message: quotesRedux[currentQuoteIndex].quote,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className=''>
        <View className='border h-[100vh] relative'>
          <View className='absolute top-12 flex-row gap-3 w-full justify-between px-4'>
            <MaterialCommunityIcons
              name='account-circle-outline'
              size={35}
              color='white'
              onPress={() => {
                router.push('/profile');
              }}
            />
            <Octicons
              name='sign-out'
              size={35}
              color='white'
              onPress={() => {
                AsyncStorage.removeItem('user');
                router.push('/index');
              }}
            />
          </View>
          <View className='flex-1 items-center justify-center'>
            {quotesRedux && quotesRedux.length > 0 ? (
              quotesRedux.map((quote: any, index: any) => {
                if (index === currentQuoteIndex) {
                  return (
                    <View key={index}>
                      <View key={index} className='px-4'>
                        <Text className='justify-center items-center italic  px-4  text-white text-2xl'>
                          {quotesRedux[currentQuoteIndex]?.quote}
                        </Text>
                        <Text className='text-secondary-100 text-lg mt-4 mx-4'>
                          {quotesRedux[currentQuoteIndex]?.quote &&
                            ' - ' + quotesRedux[currentQuoteIndex]?.author}
                        </Text>
                      </View>
                    </View>
                  );
                }
              })
            ) : (
              <Text className='justify-center items-center italic  px-4  text-white text-2xl'>
                Loading...
              </Text>
            )}
          </View>
          <View className='flex gap-8 py-6 flex-row justify-center'>
            <Feather
              name='share'
              size={35}
              color='white'
              onPress={handleShare}
            />
            {!liked ? (
              <AntDesign
                name='hearto'
                size={35}
                color={'white'}
                onPress={() =>
                  handleLike(quotesRedux[currentQuoteIndex]._id, 'add')
                }
              />
            ) : (
              <Fontisto
                name='heart'
                size={35}
                color='red'
                onPress={() =>
                  handleLike(quotesRedux[currentQuoteIndex]._id, 'remove')
                }
              />
            )}
          </View>
          <CustomButton
            title={'Next Quote'}
            className=''
            handlePress={() => handleQuoteChange()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
