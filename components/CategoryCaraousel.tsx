import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const caraouselItemWidth = Math.round(screenWidth / 2 - 35);
const TopPlacesCarousel = ({ list, headline }: any) => {
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
                <View
                  style={{
                    width: caraouselItemWidth,
                  }}
                  className={`h-[110px]  min-w-[150px] bg-primary-200 flex-row justify-between items-start m-2 p-3 rounded-lg`}
                >
                  <Text className='text-lg text-white w-[100px]'>
                    {item.name}
                  </Text>
                  <View className='mt-1'>{item.icon}</View>
                </View>
                {list[index + 1] && (
                  <View
                    style={{
                      width: caraouselItemWidth,
                    }}
                    className={`h-[100px] min-w-[150px] p-3 bg-primary-200 flex-row justify-between items-start m-2 rounded-lg`}
                  >
                    <Text className='text-lg text-white w-[100px]'>
                      {list[index + 1]?.name}
                    </Text>
                    <View className='mt-1'>{list[index + 1]?.icon}</View>
                  </View>
                )}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default TopPlacesCarousel;
