import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const SplashScreen = () => {
  return (
    <View>
      {/* TODO: Replace Image */}
      <Image source={require('../assets/sizzle.png')} style={{ width: 150, height: 150 }} />
      <Text className="ios:text-5xl ios:font-['Inter'] ios:text-black">sizzle</Text>
    </View>
  );
};
