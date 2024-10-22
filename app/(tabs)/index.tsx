import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
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
    <SafeAreaView className="flex-1">
      <TopNav
        title="Sizzle"
        onButton1Press={handleButton1Press}
        onButton2Press={handleButton2Press}
      />
      <View className="flex-1 justify-center mx-4">
        <Card>
          <CardContent>
            <CardTitle>Welcome to Sizzle</CardTitle>
            <CardSubtitle>Version 1.0.0</CardSubtitle>
          </CardContent>
          <CardFooter>
            <CardDescription>Sizzle is a boilerplate app for building apps with NativeWindUI</CardDescription>
          </CardFooter>
        </Card>
      </View>
    </SafeAreaView>
  );
}