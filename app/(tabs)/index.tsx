import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '~/components/nativewindui/Text';
import {
    addOpacityToRgb,
    Card,
    CardBadge,
    CardContent,
    CardDescription,
    CardFooter,
    CardImage,
    CardSubtitle,
    CardTitle,
  } from '~/components/nativewindui/Card';

export default function Screen() {
  return (
    <SafeAreaView className="flex-1 justify-center mx-4">
      <Card>
      <CardContent>
        <CardTitle>Welcome to Sizzle</CardTitle>
        <CardSubtitle>Version 1.0.0</CardSubtitle>
      </CardContent>
      <CardFooter>
        <CardDescription>Sizzle is a boilerplate app for building apps with NativeWindUI</CardDescription>
      </CardFooter>
    </Card>
    </SafeAreaView>
  );
}
