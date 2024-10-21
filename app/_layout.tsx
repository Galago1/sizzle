import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Animated, StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SplashScreen as CustomSplashScreen } from '../components/SplashScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('../fonts/inter.ttf'),
  });
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the native splash screen
      SplashScreen.hideAsync();
      
      // Show custom splash screen for 5 seconds after fonts are loaded
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => setShowSplash(false));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, fontError, fadeAnim]);

  // Return null while fonts are loading
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
      {showSplash && (
        <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
          <View style={styles.splashContent}>
            <CustomSplashScreen />
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white', // or any color that matches your splash screen background
  },
  splashContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
