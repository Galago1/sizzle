import * as React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

import { Card, CardContent, CardTitle, CardSubtitle } from '~/components/nativewindui/Card';

interface SideImageCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  progress: number;
  total: number;
}

export function SideImageCard({
  imageSource,
  title,
  subtitle,
  content,
  progress,
  total,
}: SideImageCardProps) {
  return (
    <Card className="h-[120px] flex-row" rootClassName="shadow-none">
      <View className="h-full w-[120px] p-4">
        <Image source={imageSource} className="h-full w-full rounded-lg" resizeMode="cover" />
      </View>

      <View className="flex-1 py-4">
        <CardTitle className="mb-2 text-xl">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        {content}
      </View>
    </Card>
  );
}
