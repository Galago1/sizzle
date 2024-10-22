import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '~/components/nativewindui/Text';

export default function Screen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="ios:text-5xl ios:font-['Inter'] ios:text-black">Welcome</Text>
    </SafeAreaView>
  );
}
