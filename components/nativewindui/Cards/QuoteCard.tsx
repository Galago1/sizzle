import * as React from 'react';
import { View } from 'react-native';

import { Card, CardContent } from '../Card';
import { Text } from '../Text';
import { cn } from '~/lib/cn';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export interface QuoteCardProps {
  quote: string;
  author: string;
  className?: string;
}

export function QuoteCard({ quote, author, className }: QuoteCardProps) {
  return (
    <Card className={cn(className)} rootClassName="shadow-none">
      <CardContent className="items-center justify-center py-8">
        <MaterialCommunityIcons name="format-quote-open" size={24} color="black" />

        <Text className="mt-2 text-center text-xl font-light text-gray-600">{quote}</Text>

        <Text className="mt-2 font-normal text-gray-600 ">{author}</Text>
      </CardContent>
    </Card>
  );
}
