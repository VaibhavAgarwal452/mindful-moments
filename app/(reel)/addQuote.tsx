import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  addQuoteToMyQuotesAsync,
  updateQuoteFromMyQuotesAsync,
} from '@/reducers/userSlice';
import Animated from 'react-native-reanimated';
import { SlideInUpAnimation } from '@/constants/animations';
import { useBackButton } from '@/hooks/useBackButton';

const AddQuote = () => {
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteError, setQuoteError] = useState({
    value: false,
    message: '',
  });
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user);
  const userId = user._id;

  const params = useLocalSearchParams();
  const { quoteId } = params;

  const handleBackButton = () => {
    router.push('/myQuotes');
    return true;
  };
  useBackButton(handleBackButton);
  useEffect(() => {
    if (quoteId) {
      user.myQuotes.forEach((item: any) => {
        if (item._id === quoteId) {
          setQuote(item.quote);
          setAuthor(item.author);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (quote) {
      setQuoteError({ value: false, message: '' });
    }
  }, [quote]);
  const saveQuote = async () => {
    if (quote.trim() !== '') {
      if (quoteId) {
        dispatch(
          updateQuoteFromMyQuotesAsync({ userId, quoteId, quote, author })
        );
      } else {
        dispatch(addQuoteToMyQuotesAsync({ userId, quote, author }));
      }
      router.push('/myQuotes');
    } else {
      setQuoteError({ value: true, message: 'Please enter some quote' });
    }
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <Animated.View
        className='mt-12 mx-4 relative h-[100vh]'
        entering={SlideInUpAnimation}
      >
        <View className='flex-row items-center gap-3'>
          <View>
            <Ionicons
              name='arrow-back'
              size={30}
              color='white'
              onPress={() => {
                if (searchInputVisible) {
                  setSearchInputVisible(false);
                } else {
                  router.push('/myQuotes');
                }
              }}
            />
          </View>
          <View>
            <Text className='text-white text-2xl'>Add New Quote</Text>
          </View>
        </View>

        <View className='mt-8'>
          <Text className='text-gray-100 text-xl'>
            Write and share your own quotes. There will be only visible to you.
          </Text>
        </View>

        <View>
          <FormField
            title='Quote'
            placeholder='Enter Quote'
            handleChangeText={setQuote}
            value={quote}
            otherStyles={'mt-10'}
            customError={quoteError}
          />
          <FormField
            title='Author'
            placeholder='Enter Author (optional)'
            handleChangeText={setAuthor}
            value={author}
            otherStyles={'mt-10'}
          />
        </View>
        <CustomButton
          title={quoteId ? 'Update' : 'Save'}
          containerStyles={'absolute bottom-10 text-white w-full'}
          handlePress={saveQuote}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default AddQuote;
