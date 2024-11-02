import * as React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from './nativewindui/Text';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, selectedId, onSelect, className }: TabsProps) {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const tabRefs = React.useRef<{ [key: string]: TouchableOpacity | null }>({});
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);

  const handleSelect = (id: string) => {
    onSelect(id);

    // Wait for the next frame to ensure layout is updated
    requestAnimationFrame(() => {
      if (tabRefs.current[id] && scrollViewRef.current) {
        tabRefs.current[id]?.measureLayout(
          scrollViewRef.current.getInnerViewNode(),
          (x, y, width) => {
            const offset = x + width / 2 - scrollViewWidth / 2;
            scrollViewRef.current?.scrollTo({ x: offset, animated: true });
          },
          (error) => {
            console.error('measureLayout error:', error);
          }
        );
      }
    });
  };

  const onScrollViewLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setScrollViewWidth(width);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      onLayout={onScrollViewLayout}
      contentContainerStyle={{ alignItems: 'center' }}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb', // gray-200
      }}>
      {tabs.map((tab) => (
        <View key={tab.id} style={{ alignItems: 'center' }}>
          <TouchableOpacity
            ref={(ref) => {
              tabRefs.current[tab.id] = ref;
            }}
            onPress={() => handleSelect(tab.id)}
            style={{
              minWidth: 80,
              paddingHorizontal: 16, // px-4
              paddingVertical: 8, // py-2
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: 14, // text-sm
                color: '#4b5563', // text-gray-600
                fontWeight: selectedId === tab.id ? '500' : 'normal', // font-medium when selected
              }}>
              {tab.label}
            </Text>
          </TouchableOpacity>
          {selectedId === tab.id && (
            <View
              style={{
                height: 2, // h-0.5
                width: 40, // w-10
                backgroundColor: '#4b5563', // bg-gray-600
              }}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
}
