import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Svg, Rect } from 'react-native-svg';

interface RectangleChartProps {
  data: number[];
}

const RectangleChart: React.FC<RectangleChartProps> = ({ data }) => {
  const renderWeek = (startIndex: number) => (
    <View key={startIndex} className="mb-1 flex-row justify-between">
      {data.slice(startIndex, startIndex + 7).map((value, index) => (
        <View key={index} className="items-center">
          <View className="h-6 w-8 overflow-hidden rounded-sm bg-gray-200">
            <Svg width="100%" height="100%">
              <Rect
                x="0"
                y={`${(1 - value) * 100}%`}
                width="100%"
                height={`${value * 100}%`}
                fill="#4B5563"
              />
            </Svg>
          </View>
          {startIndex === 28 && (
            <Text className="mt-1 text-xs text-gray-600">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'][index]}
            </Text>
          )}
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="p-4">
      <View>{[0, 7, 14, 21, 28].map((startIndex) => renderWeek(startIndex))}</View>
    </ScrollView>
  );
};

export default RectangleChart;
