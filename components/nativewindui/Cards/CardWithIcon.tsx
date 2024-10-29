import { View } from 'react-native';
import { Card, CardContent, CardTitle, CardDescription } from '../Card';

interface CardWithIconProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
}

export default function CardWithIcon({
  title,
  description,
  icon,
  isSelected = false,
}: CardWithIconProps) {
  return (
    <Card
      rootClassName="shadow-none"
      className={`border ${isSelected ? 'border-gray-800' : 'border-transparent'}`}>
      <CardContent>
        <View className="w-full flex-row items-start justify-between">
          <View className="mr-4 flex-1">
            <View className="flex-row items-center justify-between gap-2">
              <CardTitle className="font-['Inter'] !text-base !font-medium !text-gray-800">
                {title}
              </CardTitle>
              {icon && <View className="flex-shrink-0">{icon}</View>}
            </View>
            <CardDescription className="mt-1 text-sm text-gray-600">{description}</CardDescription>
          </View>
        </View>
      </CardContent>
    </Card>
  );
}
