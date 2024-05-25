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
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { createUserAsync, selectUserData } from '@/reducers/userSlice';
import { Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
// import Share from 'react-native-share';

const home = () => {
  const [quotesList, setQuotesList] = useState<any>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (
      currentQuoteIndex === 0 ||
      currentQuoteIndex === quotesList.length - 3
    ) {
      getPosts();
    }
  }, [currentQuoteIndex]);

  const getPosts = () => {
    fetch('http://15.206.72.239:8000/api/v1/quotes/random', {
      method: 'POST',
      body: JSON.stringify({
        page: 1,
        limit: 25,
      }),
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((response) => {
        let tempQuotes: any = quotesList.concat(response.quotes);
        setQuotesList([...tempQuotes]);
      });
  };

  const handleLike = (quoteId: any, value: any) => {
    if (value === 'add') {
      addQuoteToUserSavedQuotes(quoteId);
    } else {
      removeQuoteToUserSavedQuotes(quoteId);
    }
  };
  const addQuoteToUserSavedQuotes = (quoteId: any) => {
    fetch(
      `http://15.206.72.239:8000/api/v1/users/${user?._id}/addQuote/${quoteId}`,
      {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
      }
    )
      .then((response) => response.json())
      .then((response: any) => {
        setLiked(!liked);
        ToastAndroid.show('Quote add to saved quotes!', ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const removeQuoteToUserSavedQuotes = (quoteId: any) => {
    fetch(
      `http://15.206.72.239:8000/api/v1/users/${user?._id}/removeQuote/${quoteId}`,
      {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
      }
    )
      .then((response) => response.json())
      .then((response: any) => {
        setLiked(!liked);
        ToastAndroid.show(
          'Quote removed from saved quotes!',
          ToastAndroid.SHORT
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleQuoteChange = () => {
    setCurrentQuoteIndex((index) => index + 1);
    setLiked(false);
  };

  const handleShare = async () => {
    console.log('clicked');

    const options = {
      message:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, pariatur dignissimos molestiae similique recusandae natus. Asperiores aspernatur optio, voluptates ea tempore et cupiditate ratione accusamus fuga, molestias odio dolorum in?',
    };

    try {
      const result = await Share.share({
        message: quotesList[currentQuoteIndex].quote,
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
            {quotesList && quotesList.length > 0 ? (
              quotesList.map((quote: any, index: any) => {
                if (index === currentQuoteIndex) {
                  return (
                    <View key={index}>
                      <View key={index} className='px-4'>
                        <Text className='justify-center items-center italic  px-4  text-white text-2xl'>
                          {quotesList[currentQuoteIndex]?.quote}
                        </Text>
                        <Text className='text-secondary-100 text-lg mt-4 mx-4'>
                          {quotesList[currentQuoteIndex]?.quote &&
                            ' - ' + quotesList[currentQuoteIndex]?.author}
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
                  handleLike(quotesList[currentQuoteIndex]._id, 'add')
                }
              />
            ) : (
              <Fontisto
                name='heart'
                size={35}
                color='red'
                onPress={() =>
                  handleLike(quotesList[currentQuoteIndex]._id, 'remove')
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
