import React from 'react';
import { View } from 'react-native';
import { Text } from '~/components/nativewindui/Text';

interface TopNavProps {
  title: string;
  children?: React.ReactNode;
}

export function TopNav({ title, children }: TopNavProps) {
  return (
    <View className="flex-row justify-between items-center p-4 bg-gray-100">
      <Text className="ios:font-['Inter'] font-light text-2xl">{title}</Text>
      <View className="flex-row">
        {children}
      </View>
    </View>
  );
}
