import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { fetchCurrentUserAsync } from '@/reducers/userSlice';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { SlideInUpAnimation } from '@/constants/animations';

const General = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <Animated.ScrollView entering={SlideInUpAnimation}>
        <View className='mt-12 pt-6 m-4'>
          <View className='flex-row start-1 gap-3 items-center'>
            <Ionicons
              name='arrow-back'
              size={25}
              color='white'
              onPress={() => {
                router.back();
              }}
            />
            <Text className='text-white text-3xl'>General</Text>
          </View>

          <View className='mt-12'>
            <View>
              <Text className='text-white text-xl'>MAKE IT YOURS</Text>
            </View>
            <View className='bg-primary-100 rounded-xl mt-5'>
              <Pressable
                className='flex-row py-2 justify-between items-center border border-top-2 px-4'
                onPress={() => {
                  router.push('/contentPrefernces');
                }}
              >
                <View className='flex-row gap-2 items-center'>
                  <AntDesign name='book' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>
                    Content Prefrences
                  </Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              <Pressable
                className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'
                onPress={() => {
                  router.push('/updateGender');
                }}
              >
                <View className='flex-row gap-2 items-center'>
                  <FontAwesome name='transgender' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>
                    Gender Identity
                  </Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              {/* <Pressable className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'>
                <View className='flex-row gap-2 items-center'>
                  <Entypo name='language' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>Language</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable> */}
            </View>
          </View>

          {/* <View className='mt-12'>
            <View>
              <Text className='text-white text-xl'>FOLLOW US</Text>
            </View>
            <View className='bg-primary-100 rounded-xl mt-5'>
              <Pressable className='flex-row py-2 justify-between items-center border border-top-2 px-4'>
                <View className='flex-row gap-2 items-center'>
                  <AntDesign name='instagram' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>Instagram</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              <Pressable className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'>
                <View className='flex-row gap-2 items-center'>
                  <AntDesign name='facebook-square' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>Facebook</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              <Pressable className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'>
                <View className='flex-row gap-2 items-center'>
                  <AntDesign name='twitter' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>X (Twitter)</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              <Pressable className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'>
                <View className='flex-row gap-2 items-center'>
                  <AntDesign name='linkedin-square' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>LinkedIn</Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
            </View>
          </View> */}

          <View className='mt-12'>
            <View>
              <Text className='text-white text-xl'>OTHER</Text>
            </View>
            <View className='bg-primary-100 rounded-xl mt-5'>
              <Pressable className='flex-row py-2 justify-between items-center border border-top-2 px-4'>
                <View className='flex-row gap-2 items-center'>
                  <MaterialIcons name='privacy-tip' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>
                    Privacy Policies
                  </Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
              <Pressable className='px-4 py-2 justify-between flex-row items-center border border-top-1 border-black'>
                <View className='flex-row gap-2 items-center'>
                  <MaterialIcons name='event-note' size={20} color='white' />
                  <Text className='text-white p-2 text-xl'>
                    Terms and Conditions
                  </Text>
                </View>
                <AntDesign name='right' size={20} color='white' />
              </Pressable>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default General;
