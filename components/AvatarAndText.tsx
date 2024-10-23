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
    <View className="flex-row items-center">
      <Avatar alt={title} className="mr-3 h-16 w-16">
        {avatarUrl ? (
          <AvatarImage
            className="h-16 w-16"
            source={{
              uri: avatarUrl,
            }}
          />
        ) : (
          <AvatarFallback className="flex items-center justify-center bg-white">
            {fallbackText ? (
              <Text className="font-['Inter'] text-lg font-semibold text-foreground">
                {fallbackText}
              </Text>
            ) : null}
          </AvatarFallback>
        )}
      </Avatar>
      <View>
        <Text className="font-['Inter'] text-lg font-semibold">{title}</Text>
        <Text className="font-['Inter'] text-sm text-gray-600">{subtitle}</Text>
      </View>
    </View>
  );
};

export default AvatarAndText;
