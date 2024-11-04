import React from 'react';
import { View, Text } from 'react-native';

import { Avatar, AvatarFallback, AvatarImage } from './nativewindui/Avatar';

interface AvatarAndTextProps {
  avatarUrl?: string;
  title: string;
  subtitle: string;
  fallbackText?: string;
}

const AvatarAndText: React.FC<AvatarAndTextProps> = ({
  avatarUrl,
  title,
  subtitle,
  fallbackText = '',
}) => {
  return (
    <View className="flex-row items-center" testID="avatar-and-text">
      <Avatar alt={title} className="mr-3 h-16 w-16" testID="avatar">
        {avatarUrl ? (
          <AvatarImage
            className="h-16 w-16"
            source={{
              uri: avatarUrl,
            }}
            testID="avatar-image"
          />
        ) : (
          <AvatarFallback
            className="flex items-center justify-center bg-white"
            testID="avatar-fallback">
            {fallbackText ? (
              <Text
                className="font-['Inter'] text-lg font-semibold text-foreground"
                testID="fallback-text">
                {fallbackText}
              </Text>
            ) : null}
          </AvatarFallback>
        )}
      </Avatar>
      <View testID="text-container">
        <Text className="font-['Inter'] text-lg font-semibold" testID="title">
          {title}
        </Text>
        <Text className="font-['Inter'] text-sm text-gray-600" testID="subtitle">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default AvatarAndText;
