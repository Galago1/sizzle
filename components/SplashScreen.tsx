import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* TODO: Replace Image */}
      <Image 
        source={require('../assets/images/sizzlenobackground.png')} 
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.text}>sizzle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontFamily: 'Inter',
    color: 'black',
  },
});
