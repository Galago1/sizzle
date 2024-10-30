import * as React from 'react';
import { View } from 'react-native';
import { Card, CardContent } from './Card';
import { Text } from './Text';

interface ListItem {
  id: string;
  content: React.ReactNode;
}

interface EditableListProps {
  data: ListItem[];
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

export function EditableList({ data, className, title, icon }: EditableListProps) {
  return (
    <View className={className}>
      <View className="flex flex-row items-center gap-2">
        {icon}
        {title && <Text className="text-lg font-bold">{title}</Text>}
      </View>
      {data.map((item) => (
        <Card key={item.id} className="mb-4" rootClassName="shadow-none">
          <CardContent>{item.content}</CardContent>
        </Card>
      ))}
    </View>
  );
}
