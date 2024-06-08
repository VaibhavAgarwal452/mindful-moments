import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { fetchCurrentUserAsync } from '@/reducers/userSlice';
import * as Notifications from 'expo-notifications';
import {
  usePushNotifications,
  sendNotification,
} from '@/hooks/usePushNotifications';

const Profile = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { expoPushToken, notification } = usePushNotifications();
  const data = JSON.stringify(notification, undefined, 2);
  console.log(expoPushToken, data);
  useEffect(() => {
    dispatch(fetchCurrentUserAsync(user._id));
  }, []);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className=''>
        <View className='mt-12 mx-4'>
          <View className='flex-row start-1 gap-3 items-center'>
            <Entypo
              name='cross'
              size={35}
              color='white'
              onPress={() => {
                router.push('/home');
              }}
            />
            <Text className='text-white text-3xl'>Mindful Moments</Text>
          </View>

          <View className='mt-12'>
            <View>
              <Text className='text-white text-xl'>SETTINGS</Text>
            </View>
            <View className='bg-primary-100 rounded-xl mt-5'>
              <Pressable
                className='flex-row py-2 justify-between items-center border border-top-2 px-4'
                onPress={() => {
                  router.push('/general');
                }}
              >
                <View className='flex-row gap-2 items-center'>
                  <SimpleLineIcons name='settings' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>General</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              <Pressable
                className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'
                onPress={() => {
                  sendNotification(expoPushToken);
                }}
              >
                <View className='flex-row gap-2 items-center'>
                  <MaterialCommunityIcons
                    name='widgets'
                    size={20}
                    color='white'
                  />
                  <Text className='text-white p-2 text-xl'>Widgets</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
            </View>
          </View>

          <View className='mt-12'>
            <View>
              <Text className='text-white text-xl'>Your Quotes</Text>
            </View>
            <Pressable
              className='bg-primary-100 rounded-xl mt-5'
              onPress={() => {
                router.push('/collection');
              }}
            >
              <View className='flex-row py-2 justify-between items-center border border-top-2 px-4'>
                <View className='flex-row gap-2 items-center'>
                  <Entypo name='bookmarks' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>Collections</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </View>
              <Pressable
                className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'
                onPress={() => {
                  router.push('/myQuotes');
                }}
              >
                <View className='flex-row gap-2 items-center'>
                  <Foundation name='clipboard-pencil' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>Add Your Own</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              <Pressable
                className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'
                onPress={() => {
                  router.push('/favorite');
                }}
              >
                <View className='flex-row gap-2 items-center'>
                  <Fontisto name='favorite' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>
                    Favorites{' '}
                    {user &&
                      user.savedQuotes &&
                      user.savedQuotes.length > 0 && (
                        <Text>({user.savedQuotes?.length})</Text>
                      )}
                  </Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
