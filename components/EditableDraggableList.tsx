import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';

interface ListItem {
  id: string;
  text: string;
  isEditing: boolean;
}

const initialItems: ListItem[] = [
  { id: '1', text: 'Item 1', isEditing: false },
  { id: '2', text: 'Item 2', isEditing: false },
  { id: '3', text: 'Item 3', isEditing: false },
  { id: '4', text: 'Item 4', isEditing: false },
  { id: '5', text: 'Item 5', isEditing: false },
];

export default function EditableDraggableList() {
  const [items, setItems] = useState<ListItem[]>(initialItems);

  function keyExtractor(item: ListItem) {
    return item.id;
  }

  function renderItem(info: DragListRenderItemInfo<ListItem>) {
    const { item, onDragStart, onDragEnd, isActive } = info;

    return (
      <TouchableOpacity
        key={item.id}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}
        style={[styles.itemContainer, isActive && styles.activeItem]}>
        {item.isEditing ? (
          <TextInput
            value={item.text}
            onChangeText={(newText) => handleEditItem(item.id, newText)}
            onBlur={() => toggleEditMode(item.id)}
            style={styles.input}
            autoFocus
          />
        ) : (
          <Text style={styles.itemText} onLongPress={() => toggleEditMode(item.id)}>
            {item.text}
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...items];
    const removed = copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, removed[0]);
    setItems(copy);
  }

  function toggleEditMode(id: string) {
    setItems(
      items.map((item) => (item.id === id ? { ...item, isEditing: !item.isEditing } : item))
    );
  }

  function handleEditItem(id: string, newText: string) {
    setItems(items.map((item) => (item.id === id ? { ...item, text: newText } : item)));
  }

  function addNewItem() {
    const newId = (items.length + 1).toString();
    setItems([
      ...items,
      {
        id: newId,
        text: `Item ${newId}`,
        isEditing: false,
      },
    ]);
  }

  function deleteItem(id: string) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Editable Draggable List</Text>
        <TouchableOpacity style={styles.addButton} onPress={addNewItem}>
          <Text style={styles.addButtonText}>+ Add Item</Text>
        </TouchableOpacity>
      </View>

      <DragList
        data={items}
        keyExtractor={keyExtractor}
        onReordered={onReordered}
        renderItem={renderItem}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeItem: {
    backgroundColor: '#f0f0f0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemText: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
