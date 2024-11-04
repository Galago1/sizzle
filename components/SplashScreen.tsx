import React from 'react';
import { View, Text, Image } from 'react-native';

export const SplashScreen = () => {
  return (
    <View testID="splash-screen">
      {/* TODO: Replace Image */}
      <Image
        testID="splash-image"
        source={require('../assets/sizzle.png')}
        style={{ width: 150, height: 150 }}
      />
      <Text testID="splash-text" className="ios:text-5xl ios:font-['Inter'] ios:text-black">
        sizzle
      </Text>
    </View>
  );
};
