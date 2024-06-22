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
import { Fontisto } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import {
  fetchQuotesAsync,
  fetchQuotesByCategoriesAsync,
} from '@/reducers/quoteSlice';
import {
  addQuoteToUserAsync,
  removeQuotesFromUserAsync,
} from '@/reducers/userSlice';
import { fetchQuotesByIdsAsync } from '@/reducers/quoteSlice';

const home = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [quotesToShow, setQuotesToShow] = useState([]);
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user);
  const savedQuotes = useAppSelector((state) => state.quotes.savedQuotes);
  const categoryQuotes = useAppSelector((state) => state.quotes.categoryQuotes);
  let quotesRedux: any = useAppSelector((state) => state.quotes.quotes);

  const userId = user._id;
  const { page, category } = useLocalSearchParams();

  useEffect(() => {
    let userQuotesPrefrences = user?.areasOfImprovement?.concat(
      user?.reasonForImprovement
    );
    if (page === 'categories' && category === 'favorites') {
      if (user?.savedQuotes?.length > 0 && savedQuotes?.length === 0) {
        dispatch(fetchQuotesByIdsAsync(user.savedQuotes));
      } else {
        setQuotesToShow(savedQuotes);
      }
    } else if (page === 'categories') {
      if (
        currentQuoteIndex === 0 ||
        currentQuoteIndex === categoryQuotes.length - 3
      ) {
        dispatch(fetchQuotesByCategoriesAsync({ category }));
      }
    } else {
      if (
        currentQuoteIndex === 0 ||
        currentQuoteIndex === quotesRedux.length - 3
      ) {
        dispatch(fetchQuotesAsync({ userQuotesPrefrences }));
      }
    }
  }, [currentQuoteIndex]);
  useEffect(() => {
    if (page === 'categories') {
      setQuotesToShow(categoryQuotes);
    }
  }, [categoryQuotes]);
  useEffect(() => {
    if (page !== 'categories') {
      setQuotesToShow(quotesRedux);
    }
  }, [quotesRedux]);
  useEffect(() => {
    if (
      savedQuotes.length > 0 &&
      page === 'categories' &&
      category === 'favorites'
    ) {
      setQuotesToShow(savedQuotes);
    }
  }, [savedQuotes]);

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
    ToastAndroid.show('Quote Removed from saved quotes!', ToastAndroid.SHORT);
  };

  const handleQuoteChange = () => {
    setCurrentQuoteIndex((index) => index + 1);
    setLiked(false);
  };
  const handlePreviousQuoteChange = () => {
    setCurrentQuoteIndex((index) => index - 1);
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
          {/* <View className='absolute top-12 flex-row gap-3 w-full justify-between px-4'>
            <MaterialCommunityIcons
              name='account-circle-outline'
              size={35}
              color='white'
              onPress={() => {
                router.push('/profile');
              }}
            />
          </View> */}
          <View className='flex-1 items-center justify-center'>
            {quotesToShow && quotesToShow.length > 0 ? (
              quotesToShow.map((quote: any, index: any) => {
                if (index === currentQuoteIndex) {
                  return (
                    <View key={index}>
                      <View key={index} className='px-4'>
                        <Text className='justify-center items-center italic  px-4  text-white text-2xl'>
                          {quotesToShow[currentQuoteIndex]?.quote}
                        </Text>
                        <Text className='text-secondary-100 text-lg mt-4 mx-4'>
                          {quotesToShow[currentQuoteIndex]?.quote &&
                            ' - ' + quotesToShow[currentQuoteIndex]?.author}
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
                  handleLike(quotesToShow[currentQuoteIndex]._id, 'add')
                }
              />
            ) : (
              <Fontisto
                name='heart'
                size={35}
                color='red'
                onPress={() =>
                  handleLike(quotesToShow[currentQuoteIndex]._id, 'remove')
                }
              />
            )}
          </View>
          <View className='flex-row justify-between w-full px-4'>
            <CustomButton
              title={'Previous'}
              containerStyles={'w-2/5'}
              isLoading={currentQuoteIndex === 0}
              handlePress={() => handlePreviousQuoteChange()}
            />
            <CustomButton
              title={'Next'}
              containerStyles={'w-2/5'}
              isLoading={currentQuoteIndex === quotesToShow.length}
              handlePress={() => handleQuoteChange()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
