// components/nativewindui/BarChart.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface DataItem {
  day: string;
  total: number;
  completed: number;
}

interface BarChartProps {
  data: DataItem[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.barContainer}>
          <Svg height="100" width="20">
            <Path
              d={`M0,${100 - (item.total / 20) * 100} 
        a10,10 0 0 1 10,-10 
        a10,10 0 0 1 10,10 
        v${Math.max((item.total / 20) * 100 - 10, 0)} 
        h-20 
        z`}
              fill="#d3d3d3"
            />
            <Path
              d={`M0,${100 - (item.completed / 20) * 100} 
        a10,10 0 0 1 10,-10 
        a10,10 0 0 1 10,10 
        v${Math.max((item.completed / 20) * 100 - 10, 0)} 
        h-20 
        z`}
              fill="#333"
            />
          </Svg>
          <Text style={styles.dayLabel}>{item.day}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 10,
  },
  barContainer: {
    alignItems: 'center',
  },
  dayLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default BarChart;
