import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className=''>
        <View>
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
