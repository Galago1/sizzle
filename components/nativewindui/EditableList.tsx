import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import { Card, CardContent } from './Card';
import { Text } from './Text';
import { MaterialIcons } from '@expo/vector-icons';

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
  onReorder?: (fromIndex: number, toIndex: number) => void;
}

export function EditableList({
  data,
  className,
  title,
  onItemSelect,
  onReorder,
}: EditableListProps) {
  const keyExtractor = (item: ListItem) => item.id;

  const renderItem = (info: DragListRenderItemInfo<ListItem>) => {
    const { item, onDragStart, onDragEnd } = info;

    return (
      <View className="mb-4 flex flex-row items-center justify-between">
        <View className="flex flex-1 flex-row items-center">
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
          <View className="flex-1">
            <Card rootClassName="shadow-none">
              <CardContent>{item.content}</CardContent>
            </Card>
          </View>
        </View>
        <TouchableOpacity onPressIn={onDragStart} onPressOut={onDragEnd} className="ml-2 p-2">
          <MaterialIcons name="drag-handle" size={24} color="#9ca3af" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleReorder = async (fromIndex: number, toIndex: number) => {
    onReorder?.(fromIndex, toIndex);
  };

  return (
    <View className={className}>
      {title && <Text className="text-lg font-bold">{title}</Text>}
      <DragList
        data={data}
        keyExtractor={keyExtractor}
        onReordered={handleReorder}
        renderItem={renderItem}
      />
    </View>
  );
}
