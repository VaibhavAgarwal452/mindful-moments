import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useEffect } from 'react';
import { images } from '../constants';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { updateUserData } from '@/reducers/userSlice';
import data from '../onboarding/data/data';
import Pagination from '../onboarding/components/Pagination';
import CustomButton from '../onboarding/components/CustomButton';

const index = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      dispatch(updateUserData(JSON.parse(user)));
      router.push('/home');
    }
  };
  const handlePress = () => {
    router.push('/intro-screen2');
    // router.push('/home');
  };
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const flatListRef = useAnimatedRef();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    flatListIndex.value = viewableItems[0]?.index;
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event?.contentOffset?.x;
    },
  });

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderItem = ({ item, index }: any) => {
    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP
      );
      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.8,
        transform: [{ translateY: translateYAnimation }],
      };
    });
    const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP
      );

      return {
        opacity: opacityAnimation,
        transform: [{ translateY: translateYAnimation }],
      };
    });
    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Animated.Image source={item.image} style={imageAnimationStyle} />
        <Animated.View style={textAnimationStyle}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={(item: any) => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.bottomContainer}>
        <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} />
        <CustomButton
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#161622',
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  itemText: {
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'white',
    lineHeight: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
});
export default index;
