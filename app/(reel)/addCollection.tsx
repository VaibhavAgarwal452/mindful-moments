import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from 'react-native';
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
import { createAsync, updateNameAsync } from '@/reducers/collectionSlice';

const AddCollection = () => {
  const [collectionName, setCollectionName] = useState('');
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user);
  const collection: any = useAppSelector((state) => state.collection);
  const userId = user._id;

  const params = useLocalSearchParams();

  const { collectionId } = params;

  useEffect(() => {
    if (collectionId) {
      collection?.collections?.map((item: any) => {
        console.log(item, 'item');
        if (item._id === collectionId) {
          setCollectionName(item.collectionName);
        }
      });
    }
  }, []);

  const saveQuote = async () => {
    if (collectionId) {
      dispatch(
        updateNameAsync({ collectionId, newCollectionName: collectionName })
      );
    } else {
      dispatch(createAsync({ userId, collectionName }));
    }
    if (!collection.loading) {
      router.push('/collection');
    }
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='mt-12 mx-4 relative h-[100vh]'>
        <View className='flex-row items-center gap-3'>
          <View>
            <Ionicons
              name='arrow-back'
              size={30}
              color='white'
              onPress={() => {
                router.push('/collection');
              }}
            />
          </View>
          <View>
            <Text className='text-white text-2xl'>New Collection</Text>
          </View>
        </View>

        <View className='mt-8'>
          <Text className='text-gray-100 text-xl'>
            Write a name for your new collection. You can rename it later.
          </Text>
        </View>

        <View>
          <FormField
            title=''
            placeholder='My New Collection'
            handleChangeText={setCollectionName}
            value={collectionName}
            otherStyles={'mt-10'}
          />
        </View>
        <CustomButton
          title={collectionId ? 'Update' : 'Save'}
          containerStyles={'absolute bottom-10 text-white w-full'}
          handlePress={saveQuote}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCollection;
