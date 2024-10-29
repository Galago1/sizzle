import * as React from 'react';
import { View } from 'react-native';

import { Card, CardContent } from '../Card';
import { Text } from '../Text';

interface FooterCardProps {
  title: string;
  description: string;
  footerIcon?: React.ReactNode;
  footerContent?: React.ReactNode;
  icon?: React.ReactNode;
}

export function FooterCard({
  title,
  description,
  footerIcon,
  footerContent,
  icon,
}: FooterCardProps) {
  return (
    <Card rootClassName="shadow-none">
      <CardContent>
        <View className="flex-row items-start justify-between gap-3">
          <View className="flex-1">
            <Text variant="heading" className="font-['Inter'] font-semibold text-gray-600">
              {title}
            </Text>
            <Text
              variant="body"
              className="mt-1 font-['Inter'] text-sm text-gray-600"
              numberOfLines={2}>
              {description}
            </Text>
          </View>
          {icon && <View className="flex-shrink-0">{icon}</View>}
        </View>
        <View className="mt-2 flex-row items-center justify-between">
          {footerIcon && <View className="flex-shrink-0">{footerIcon}</View>}
          {footerContent && <View className="flex-shrink-0">{footerContent}</View>}
        </View>
      </CardContent>
    </Card>
  );
}
