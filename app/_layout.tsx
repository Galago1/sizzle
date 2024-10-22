import '../global.css';
import 'expo-dev-client';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { Icon } from '@roninoss/icons';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, View, StyleSheet, Animated } from 'react-native';

import { useEffect, useState } from 'react';

import { ThemeToggle } from '~/components/ThemeToggle';
import { cn } from '~/lib/cn';
import { useColorScheme, useInitialAndroidBarSync } from '~/lib/useColorScheme';
import { NAV_THEME } from '~/theme';
import { SplashScreen as CustomSplashScreen } from '~/components/SplashScreen';
import * as SplashScreen from 'expo-splash-screen';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    // Hide the native splash screen
    SplashScreen.hideAsync();
    
    // Show custom splash screen for 3 seconds
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setShowSplash(false));
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />

      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <Stack screenOptions={SCREEN_OPTIONS}>
          <Stack.Screen name="(tabs)" options={INDEX_OPTIONS} />
          <Stack.Screen name="modal" options={MODAL_OPTIONS} />
        </Stack>
      </NavThemeProvider>

      {showSplash && (
        <Animated.View 
          style={[
            styles.splashContainer,
            { opacity: fadeAnim }
          ]}
        >
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
