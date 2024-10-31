import * as React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from './nativewindui/Text';
import { cn } from '~/lib/cn';

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
      className={cn('border-b border-gray-200', className)}>
      {tabs.map((tab) => (
        <View key={tab.id} style={{ alignItems: 'center' }}>
          <TouchableOpacity
            ref={(ref) => {
              tabRefs.current[tab.id] = ref;
            }}
            onPress={() => handleSelect(tab.id)}
            className={cn('min-w-[80px] px-4 py-2')}>
            <Text
              className={cn(
                'text-center font-["Inter"] text-sm text-gray-600',
                selectedId === tab.id ? 'font-medium' : ''
              )}>
              {tab.label}
            </Text>
          </TouchableOpacity>
          {selectedId === tab.id && <View className="h-0.5 w-10 bg-gray-600" />}
        </View>
      ))}
    </ScrollView>
  );
}
