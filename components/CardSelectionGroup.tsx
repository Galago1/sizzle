import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { Card, CardContent, CardTitle, CardDescription } from './nativewindui/Card';

interface CardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface CardSelectionGroupProps {
  cards: CardItem[];
  onSelect?: (index: number) => void;
}

export default function CardSelectionGroup({ cards, onSelect }: CardSelectionGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardPress = (index: number) => {
    setSelectedIndex(index);
    onSelect?.(index);
  };

  return (
    <View className="flex flex-col gap-4">
      {cards.map((card, index) => (
        <Pressable key={index} onPress={() => handleCardPress(index)}>
          <Card
            rootClassName="shadow-none"
            className={`border ${
              selectedIndex === index ? 'border-gray-800' : 'border-transparent'
            }`}>
            <CardContent>
              <View className="w-full flex-row items-start justify-between">
                <View className="mr-4 flex-1">
                  <CardTitle className="font-['Inter'] !text-base !font-light !text-gray-600">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm text-gray-600">
                    {card.description}
                  </CardDescription>
                </View>
                {card.icon && <View className="flex-shrink-0">{card.icon}</View>}
              </View>
            </CardContent>
          </Card>
        </Pressable>
      ))}
    </View>
  );
}
