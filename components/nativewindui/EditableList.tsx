import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Card, CardContent, CardTitle, CardDescription } from './Card';
import { Text } from './Text';

interface ListItem {
  id: string;
  content: React.ReactNode;
  selected?: boolean;
}

interface EditableListProps {
  data: ListItem[];
  className?: string;
  title?: string;
  onItemSelect?: (id: string) => void;
}

export function EditableList({ data, className, title, onItemSelect }: EditableListProps) {
  return (
    <View className={className}>
      {title && <Text className="text-lg font-bold">{title}</Text>}
      {data.map((item) => (
        <View key={item.id} className="mb-4 flex flex-row items-center">
          <TouchableOpacity
            onPress={() => onItemSelect?.(item.id)}
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#d1d5db',
              marginRight: 12,
              backgroundColor: item.selected ? '#1f2937' : 'transparent',
            }}
          />
          <Card className="flex-1" rootClassName="shadow-none">
            <CardContent>{item.content}</CardContent>
          </Card>
        </View>
      ))}
    </View>
  );
}
