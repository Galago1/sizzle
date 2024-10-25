import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '~/components/nativewindui/Text';

interface BarProps {
  startAdornment?: React.ReactNode; // Renamed from icon and made optional
  title: string;
  link: string;
  endAdornment?: React.ReactNode;
  className?: string;
}

export function Bar({ startAdornment, title, link, endAdornment, className }: BarProps) {
  return (
    <Link href={link as Href<string>} asChild>
      <TouchableOpacity
        className={`flex-row items-center justify-between rounded-lg bg-white p-4 ${className || ''}`}>
        <View className="flex-1 flex-row items-center">
          {startAdornment && <View className="mr-3">{startAdornment}</View>}
          <Text className="flex-shrink font-['Inter'] text-sm font-normal text-gray-600">
            {title}
          </Text>
        </View>
        <View className="flex-shrink-0">
          {endAdornment || <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />}
        </View>
      </TouchableOpacity>
    </Link>
  );
}

interface BarGroupProps {
  children: React.ReactNode;
}

export function BarGroup({ children }: BarGroupProps) {
  return (
    <View className="overflow-hidden rounded-lg bg-white">
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <View className="h-[1px] bg-gray-200" />}
          {child}
        </React.Fragment>
      ))}
    </View>
  );
}
