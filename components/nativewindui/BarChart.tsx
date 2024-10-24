// components/nativewindui/BarChart.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

const BarChart = () => {
  const data = [
    { day: 'SUN', total: 10, completed: 6 },
    { day: 'MON', total: 12, completed: 8 },
    { day: 'TUE', total: 18, completed: 10 },
    { day: 'WED', total: 16, completed: 12 },
    { day: 'THR', total: 10, completed: 7 },
    { day: 'FRI', total: 18, completed: 13 },
    { day: 'SAT', total: 18, completed: 18 },
  ];

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