import * as React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text } from '~/components/nativewindui/Text';
import { TopNav } from '~/components/TopNav';

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <TopNav title="Organisms">
          <TouchableOpacity className="mr-4">
            <Text className="text-blue-500">Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Button 2</Text>
          </TouchableOpacity>
        </TopNav>
      </View>
    </SafeAreaView>
  );
}
