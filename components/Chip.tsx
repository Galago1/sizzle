import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  variant?: 'filled' | 'outlined';
  onPress?: (isSelected: boolean) => void;
  className?: string;
}

const Chip = ({
  label,
  icon,
  selected: initialSelected = false,
  disabled = false,
  variant = 'filled',
  onPress,
  className = '',
}: ChipProps) => {
  const [isSelected, setIsSelected] = React.useState(initialSelected);

  const handlePress = () => {
    const newSelected = !isSelected;
    setIsSelected(newSelected);
    onPress?.(newSelected);
  };

  return (
    <Pressable
      testID="chip"
      onPress={disabled ? undefined : handlePress}
      className={`
        flex-row items-center self-start rounded-full border px-6 py-2.5
        ${
          disabled
            ? 'opacity-40'
            : variant === 'outlined'
              ? 'border-gray-600 bg-transparent'
              : isSelected
                ? 'border-gray-800 bg-white'
                : 'border-gray-200 bg-white'
        }
        ${className}
      `}>
      {icon && <View className="mr-2">{icon}</View>}
      <Text
        testID="chip-label"
        className={`
          text-center text-sm font-medium
          ${disabled ? 'text-gray-400' : 'text-gray-800'}
          ${isSelected && variant !== 'outlined' ? 'font-semibold' : ''}
        `}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Chip;
