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

const MyQuotes = () => {
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user);
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentQuoteId, setCurrentQuoteId] = useState('');
  const userId = user._id;

  useEffect(() => {
    const searchQuote = setTimeout(() => {
      if (inputText) {
        dispatch(searchMyQuotes(inputText));
      }
    }, 100);

    return () => clearTimeout(searchQuote);
  }, [inputText]);
  const handleShare = async (shareText: string) => {
    try {
      const result = await Share.share({
        message: shareText,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleRemove = () => {
    dispatch(
      removeQuotesFromMyQuotesAsync({ userId, quoteId: currentQuoteId })
    );
    setIsModalVisible(false);
    setCurrentQuoteId('');
  };

  const handleEdit = () => {
    router.push({ pathname: '/addQuote', params: { quoteId: currentQuoteId } });
  };

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
              <View className='flex-row w-auto justify-between items-center'>
                <Text className='text-white text-2xl'>Added</Text>
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

        <View className='h-[80vh] '>
          <ScrollView className='mt-4'>
            {!inputText
              ? user &&
                user?.myQuotes &&
                user.myQuotes.length > 0 &&
                user.myQuotes.map((item: any, index: any) => {
                  return (
                    <View
                      key={index}
                      className='bg-primary-100 rounded-xl mt-5'
                    >
                      <View className='p-4'>
                        <View className='flex-row justify-between'>
                          <Text className='text-white text-lg'>
                            {item.quote}
                          </Text>
                          <Entypo
                            name='dots-three-vertical'
                            size={15}
                            color='white'
                            onPress={() => {
                              setIsModalVisible(!isModalVisible);
                              setCurrentQuoteId(item._id);
                            }}
                          />
                        </View>
                        <View className='flex-row justify-between mt-2'>
                          {item.author && (
                            <Text className='text-white text-md'>
                              -{item.author}
                            </Text>
                          )}
                          <View className='flex-row'>
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
              : user?.searchedMyQuotes?.map((item: any, index: any) => {
                  return (
                    <View
                      key={index}
                      className='bg-primary-100 rounded-xl mt-5'
                    >
                      <View className='p-4'>
                        <View className='flex-row justify-between'>
                          <Text className='text-white text-lg'>
                            {item.quote}
                          </Text>
                          <Entypo
                            name='dots-three-vertical'
                            size={15}
                            color='white'
                            onPress={() => {
                              setIsModalVisible(!isModalVisible);
                              setCurrentQuoteId(item._id);
                            }}
                          />
                        </View>
                        <View className='flex-row justify-between mt-2'>
                          {item.author && (
                            <Text className='text-white text-md'>
                              -{item.author}
                            </Text>
                          )}
                          <View className='flex-row'>
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
            <Modal
              isVisible={isModalVisible}
              onBackdropPress={() => setIsModalVisible(false)}
            >
              <View className='h-[25vh] flex justify-center bg-primary-100'>
                <View>
                  <Pressable className='my-4' onPress={handleEdit}>
                    <Text className='text-white text-2xl mx-auto '>Edit</Text>
                  </Pressable>
                  <Pressable className='mt-4 mb-4' onPress={handleRemove}>
                    <Text className='text-white text-2xl mx-auto '>Remove</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </View>
        <View>
          <CustomButton
            title='Add'
            containerStyles={'text-white mt-10 w-full'}
            handlePress={() => {
              router.push('/addQuote');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyQuotes;
