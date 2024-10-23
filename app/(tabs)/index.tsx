import * as React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Text } from '~/components/nativewindui/Text';
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardSubtitle,
  CardTitle,
} from '~/components/nativewindui/Card';
import { TopNav } from '~/components/TopNav';

export default function Screen() {
  const handleButton1Press = () => {
    console.log('Button 1 pressed');
  };

  const handleButton2Press = () => {
    console.log('Button 2 pressed');
  };

  return (
    <SafeAreaView>
      <View className="h-full p-4">
        <TopNav title="Welcome">
          <TouchableOpacity onPress={handleButton1Press}>
            <Text className="mr-4 text-blue-500">Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButton2Press}>
            <Text className="text-blue-500">Button 2</Text>
          </TouchableOpacity>
        </TopNav>
        <View className="flex-1 items-center justify-center">
          <Card>
            <CardContent>
              <CardTitle>Welcome to Sizzle</CardTitle>
              <CardSubtitle>Version 1.0.0</CardSubtitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Sizzle is a boilerplate app for building apps with NativeWindUI
              </CardDescription>
            </CardFooter>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
}
