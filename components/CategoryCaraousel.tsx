import React from 'react';
import { Text, View, ScrollView, Dimensions, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { addQuoteToQuotes, resetCategoriesQuotes } from '@/reducers/quoteSlice';

const screenWidth = Dimensions.get('window').width;
const caraouselItemWidth = Math.round(screenWidth / 2 - 35);

const TopPlacesCarousel = ({ list, headline }: any) => {
  const user = useAppSelector((state) => state.user);
  const savedQuotes = useAppSelector((state) => state.quotes.savedQuotes);
  const dispatch = useAppDispatch();
  const handlePress = (item: any) => {
    if (item.category === 'general') {
      if (item.subCategory === 'favorites') {
        router.push({
          pathname: `/quotesList`,
          params: { page: 'categories', category: 'favorites' },
        });
      }
      if (item.subCategory === 'collections') {
        router.push('/collection');
      }
      if (item.subCategory === 'myOwnQuotes') {
        router.push('/myQuotes');
      }
    } else {
      dispatch(resetCategoriesQuotes());
      router.push({
        pathname: '/quotesList',
        params: { page: 'categories', category: item.filterCategoryBy },
      });
    }
  };

  return (
    <View>
      {headline && (
        <Text className='text-white text-xl p-2 font-bold'>{headline}</Text>
      )}
      <ScrollView horizontal={true}>
        {list &&
          list.length > 0 &&
          list.map((item: any, index: any) => {
            // Render only even indexed items
            if (index % 2 !== 0) return null;

            return (
              <View key={item.id} className='flex-1'>
                <Pressable
                  style={{
                    width: caraouselItemWidth,
                  }}
                  onPress={() => handlePress(item)}
                  className={`h-[110px]  min-w-[150px] bg-primary-200 flex-row justify-between items-start m-2 p-3 rounded-lg`}
                >
                  <Text className='text-lg text-white w-[100px]'>
                    {item.name}
                  </Text>
                  <View className='mt-1'>{item.icon}</View>
                </Pressable>
                {list[index + 1] && (
                  <Pressable
                    style={{
                      width: caraouselItemWidth,
                    }}
                    onPress={() => handlePress(list[index + 1])}
                    className={`h-[100px] min-w-[150px] p-3 bg-primary-200 flex-row justify-between items-start m-2 rounded-lg`}
                  >
                    <Text className='text-lg text-white w-[100px]'>
                      {list[index + 1]?.name}
                    </Text>
                    <View className='mt-1'>{list[index + 1]?.icon}</View>
                  </Pressable>
                )}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default TopPlacesCarousel;
