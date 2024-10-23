import * as React from 'react';
import { Button, SafeAreaView, TouchableOpacity, View } from 'react-native';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardSubtitle,
  CardTitle,
} from '~/components/nativewindui/Card';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import { Text } from '~/components/nativewindui/Text';
import { TopNav } from '~/components/TopNav';
import { useColorScheme } from '~/lib/useColorScheme';

export default function Screen() {
  const { colors, isDarkColorScheme } = useColorScheme();
  const bottomSheetModalRef = useSheetRef();
  return (
    <>
      <SafeAreaView className="flex-1">
        <View className="p-4">
          <TopNav title="Molecules">
            <TouchableOpacity className="mr-4">
              <Text className="text-blue-500">Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-blue-500">Button 2</Text>
            </TouchableOpacity>
          </TopNav>
          <View className="mt-4">
            <Card>
              <CardContent>
                <Text className="font-['Inter'] font-light">Bottom Sheet</Text>
                <TouchableOpacity
                  className="mt-1 rounded-full bg-gray-600 py-3"
                  onPress={() => bottomSheetModalRef.current?.present()}>
                  <Text className="text-center font-['Inter'] font-semibold text-white">
                    Open Bottom Sheet
                  </Text>
                </TouchableOpacity>
              </CardContent>
            </Card>
          </View>
        </View>
      </SafeAreaView>
      <Sheet ref={bottomSheetModalRef} snapPoints={[200]}>
        <View className="flex-1 items-center justify-center pb-8">
          <Text className="text-foreground">@gorhom/bottom-sheet 🎉</Text>
        </View>
      </Sheet>
    </>
  );
}
