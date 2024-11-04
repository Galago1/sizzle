import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/nativewindui/Text';

interface TopNavProps {
  title: string;
  children?: React.ReactNode;
}

export function TopNav({ title, children }: TopNavProps) {
  return (
    <View testID="top-nav" className="flex-row items-center justify-between ">
      <Text className="text-2xl font-light">{title}</Text>
      <View className="flex-row">{children}</View>
    </View>
  );
}
