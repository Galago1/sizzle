import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '~/components/nativewindui/Text';

interface TopNavProps {
  title: string;
  onButton1Press: () => void;
  onButton2Press: () => void;
}

export function TopNav({ title, onButton1Press, onButton2Press }: TopNavProps) {
  return (
    <View className="flex-row justify-between items-center p-4 bg-gray-100">
      <Text className="ios:font-['Inter']">{title}</Text>
      <View className="flex-row">
        <TouchableOpacity onPress={onButton1Press} className="mr-4">
          <Text className="text-blue-500">Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onButton2Press}>
          <Text className="text-blue-500">Button 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

