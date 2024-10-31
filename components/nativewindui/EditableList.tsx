import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import { Card, CardContent } from './Card';
import { Text } from './Text';
import { TextField } from './TextField/TextField';
import { MaterialIcons } from '@expo/vector-icons';
import { cn } from '~/lib/cn';

interface ListItem {
  id: string;
  content: string;
  selected?: boolean;
}

interface EditableListProps {
  data: ListItem[];
  className?: string;
  title?: string;
  onItemSelect?: (id: string) => void;
  onReorder?: (fromIndex: number, toIndex: number) => void;
  onAddItem?: () => void;
  onUpdateContent?: (id: string, content: string) => void;
}

export function EditableList({
  data,
  className,
  title,
  onItemSelect,
  onReorder,
  onAddItem,
  onUpdateContent,
}: EditableListProps) {
  const keyExtractor = (item: ListItem) => item.id;

  const renderItem = (info: DragListRenderItemInfo<ListItem>) => {
    const { item, onDragStart, onDragEnd } = info;

    return (
      <View className="mb-4 flex flex-row items-center justify-between">
        <View className="flex flex-1 flex-row items-center">
          <TouchableOpacity
            onPress={() => onItemSelect?.(item.id)}
            className={cn(
              'h-10 w-10 rounded-full border border-gray-300',
              item.selected ? 'bg-gray-400' : 'bg-transparent'
            )}
          />
          <View className="flex-1">
            <Card rootClassName="shadow-none">
              <CardContent>
                <TextField
                  value={item.content}
                  onChangeText={(newContent) => onUpdateContent?.(item.id, newContent)}
                  className="bg-transparent"
                />
              </CardContent>
            </Card>
          </View>
        </View>
        <TouchableOpacity onPressIn={onDragStart} onPressOut={onDragEnd} className="ml-2 p-2">
          <MaterialIcons name="drag-handle" size={24} className="text-gray-400" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleReorder = async (fromIndex: number, toIndex: number) => {
    onReorder?.(fromIndex, toIndex);
  };

  return (
    <View className={className}>
      {title && <Text className="mb-4 text-lg font-bold">{title}</Text>}
      <DragList
        data={data}
        keyExtractor={keyExtractor}
        onReordered={handleReorder}
        renderItem={renderItem}
      />
      <TouchableOpacity
        onPress={onAddItem}
        className="mt-4 self-center rounded-full border border-gray-800 px-6 py-2">
        <Text className="font-['Inter'] font-medium text-gray-600">Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
