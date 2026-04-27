import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import {
    Entypo,
    SimpleLineIcons,
    MaterialCommunityIcons,
    AntDesign,
    Fontisto,
    Foundation,
    FontAwesome5
} from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { fetchCurrentUserAsync } from '@/reducers/userSlice';
import Animated from 'react-native-reanimated';
import { SlideInDownAnimation } from '@/constants/animations';
import { useBackButton } from '@/hooks/useBackButton';

const Page = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const handleBackButton = () => {
        router.push('/home');
        return true;
    };
    useBackButton(handleBackButton);


    return (
        <SafeAreaView className='bg-primary h-full'>
            <Animated.ScrollView entering={SlideInDownAnimation}>
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
                        <Text className='text-white text-3xl'>Themes</Text>
                    </View>


                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

export default Page;
