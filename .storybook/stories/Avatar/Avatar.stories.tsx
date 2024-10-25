import React from 'react';
import { View } from 'react-native';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/nativewindui/Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const Default = () => (
  <View className="p-4">
    <Avatar>
      <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </View>
);

export const WithFallback = () => (
  <View className="p-4">
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  </View>
);

export const CustomSize = () => (
  <View className="p-4">
    <Avatar className="h-16 w-16">
      <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </View>
);
