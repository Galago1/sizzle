import '../global.css';
import 'expo-dev-client';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Animated } from 'react-native';

import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

import { ThemeToggle } from '~/components/ThemeToggle';
import { useColorScheme, useInitialAndroidBarSync } from '~/lib/useColorScheme';
import { NAV_THEME } from '~/theme';
import { SplashScreen as CustomSplashScreen } from '~/components/SplashScreen';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [showSplash, setShowSplash] = useState(false);
  const fadeAnim = useState(new Animated.Value(1))[0];

  const [fontsLoaded, fontError] = useFonts({
    Inter: require('../assets/fonts/Inter.ttf'),
    // Add other font weights if needed
    // 'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          setShowSplash(false);
          SplashScreen.hideAsync();
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, fadeAnim]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />

      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavThemeProvider value={NAV_THEME[colorScheme]}>
            <Stack screenOptions={SCREEN_OPTIONS}>
              <Stack.Screen name="(tabs)" options={INDEX_OPTIONS} />
              <Stack.Screen name="modal" options={MODAL_OPTIONS} />
            </Stack>
          </NavThemeProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>

      {showSplash && (
        <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
          <CustomSplashScreen />
        </Animated.View>
      )}
    </View>
  );
}

const SCREEN_OPTIONS = {
  animation: 'ios', // for android
} as const;

const INDEX_OPTIONS = {
  // headerLargeTitle: true,
  // title: 'NativeWindUI',
  // headerRight: () => <SettingsIcon />,
} as const;

// function SettingsIcon() {
//   const { colors } = useColorScheme();
//   return (
//     <Link href="/modal" asChild>
//       <Pressable className="opacity-80">
//         {({ pressed }) => (
//           <View className={cn(pressed ? 'opacity-50' : 'opacity-90')}>
//             <Icon name="cog-outline" color={colors.foreground} />
//           </View>
//         )}
//       </Pressable>
//     </Link>
//   );
// }

const MODAL_OPTIONS = {
  presentation: 'modal',
  animation: 'fade_from_bottom', // for android
  title: 'Settings',
  headerRight: () => <ThemeToggle />,
} as const;

const styles = StyleSheet.create({
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
