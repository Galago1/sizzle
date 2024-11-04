import { View } from 'react-native';
import Chip from './Chip';

interface ChipListProps {
  labels: string[];
  disabledLabels?: string[];
  selectedLabels?: string[];
  onSelectionChange?: (selectedLabels: string[]) => void;
}

const ChipList = ({
  labels,
  disabledLabels = [],
  selectedLabels = [],
  onSelectionChange,
}: ChipListProps) => {
  const handleChipPress = (label: string) => {
    if (!onSelectionChange || disabledLabels.includes(label)) return;

    const newSelection = selectedLabels.includes(label)
      ? selectedLabels.filter((l) => l !== label)
      : [...selectedLabels, label];

    onSelectionChange(newSelection);
  };

  return (
    <View testID="chip-list" className="flex-row flex-wrap gap-2">
      {labels.map((label) => (
        <Chip
          key={label}
          label={label}
          selected={selectedLabels.includes(label)}
          disabled={disabledLabels.includes(label)}
          onPress={() => handleChipPress(label)}
          testID={`chip-${label}`}
        />
      ))}
    </View>
  );
};

export default ChipList;
