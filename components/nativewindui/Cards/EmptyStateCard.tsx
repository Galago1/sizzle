import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Text } from '../Text';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Card } from '../Card';

interface EmptyStateCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function EmptyStateCard({
  title,
  description,
  buttonText,
  onButtonClick,
}: EmptyStateCardProps) {
  return (
    <Card className="items-center p-6" rootClassName="shadow-none">
      <FontAwesome6 name="mountain-sun" size={24} color="black" className="mb-2 mt-4" />
      <Text className="mb-2 text-center font-['Inter'] text-xl font-medium text-gray-600">
        {title}
      </Text>
      <Text className="mb-2 text-center font-['Inter'] text-gray-600">{description}</Text>
      <TouchableOpacity
        onPress={onButtonClick}
        className="mb-2 rounded-full border border-gray-800 px-6 py-2">
        <Text className="font-['Inter'] font-medium text-gray-600">{buttonText}</Text>
      </TouchableOpacity>
    </Card>
  );
}
