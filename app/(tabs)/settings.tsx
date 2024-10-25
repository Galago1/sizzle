import { Icon } from '@roninoss/icons';
import { colorScheme } from 'nativewind';
import * as React from 'react';
import { Pressable, SafeAreaView, TouchableOpacity, View } from 'react-native';

import { TopNav } from '~/components/TopNav';
import { Card, CardContent } from '~/components/nativewindui/Card';
import { Text } from '~/components/nativewindui/Text';
import { cn } from '~/lib/cn';
import { useColorScheme } from '~/lib/useColorScheme';
import { COLORS } from '~/theme/colors';

export default function Screen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <TopNav title="Settings">
          <TouchableOpacity className="mr-4">
            <Text className="text-blue-500">Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Button 2</Text>
          </TouchableOpacity>
        </TopNav>
        <View className="mt-4">
          <Card rootClassName="shadow-none">
            <CardContent>
              <Text className="font-['Inter'] font-light">Toggle Theme</Text>
              <View className="mt-2 items-center">
                <Pressable onPress={toggleColorScheme} className="opacity-80">
                  {colorScheme === 'dark'
                    ? ({ pressed }) => (
                        <View className={cn('px-0.5', pressed && 'opacity-50')}>
                          <Icon namingScheme="sfSymbol" name="moon.stars" color={COLORS.white} />
                        </View>
                      )
                    : ({ pressed }) => (
                        <View className={cn('px-0.5', pressed && 'opacity-50')}>
                          <Icon namingScheme="sfSymbol" name="sun.min" color={COLORS.black} />
                        </View>
                      )}
                </Pressable>
              </View>
            </CardContent>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
}
