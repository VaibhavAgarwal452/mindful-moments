import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import CategoryCaraousel from '@/components/CategoryCaraousel';
import {
  CalmDownCategory,
  ForYouCategory,
  GeneralCategory,
  HardTimesCategory,
  HealthAndFitnessCategory,
  InspirationCategory,
  MostPopularCategory,
  PersonGrowthCategory,
  RelationshipsCategory,
  SpiritualCategory,
  TopPicksCategory,
  WorkProductiveCategry,
} from '../../data';

const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='m-4 mt-12'>
          <View className='flex-row start-1 justify-between items-center'>
            <View className='flex-row gap-3 items-center'>
              <Entypo
                name='cross'
                size={35}
                color='white'
                onPress={() => {
                  router.push('/home');
                }}
              />
              <Text className='text-white text-3xl font-bold'>
                Explore Topics
              </Text>
            </View>
            <View className='flex-row gap-3 items-center'>
              <AntDesign
                name='search1'
                size={30}
                color='white'
                // onPress={() => router.push('/category')}
              />
              {/* <Text className='text-white text-2xl'>Edit</Text> */}
            </View>
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel list={GeneralCategory} />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel list={ForYouCategory} headline='For you' />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel list={TopPicksCategory} headline='Top Picks' />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel
              list={MostPopularCategory}
              headline='Most Popular'
            />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel list={HardTimesCategory} headline='Hard Times' />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel
              list={PersonGrowthCategory}
              headline='Personal growth'
            />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel list={CalmDownCategory} headline='Calm Down' />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel
              list={WorkProductiveCategry}
              headline='Work & productivity'
            />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel
              list={InspirationCategory}
              headline='Inspiration'
            />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel
              list={RelationshipsCategory}
              headline='Relationships'
            />
          </View>

          <View className='w-full mt-6'>
            <CategoryCaraousel
              list={SpiritualCategory}
              headline='Spiritual & philosophy'
            />
          </View>

          {/* <View className='w-full mt-6'>
            <CategoryCaraousel
              list={HealthAndFitnessCategory}
              headline='Health & fitness'
            />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
