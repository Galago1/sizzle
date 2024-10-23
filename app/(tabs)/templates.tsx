import * as React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
  Card,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardDescription,
} from '~/components/nativewindui/Card';
import { Text } from '~/components/nativewindui/Text';
import { TopNav } from '~/components/TopNav';

export default function Screen() {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/login');
  };

  const handleNavigateToProfile = () => {
    router.push('/UserProfile');
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="mx-4">
        <TopNav title="Templates">
          <TouchableOpacity className="mr-4">
            <Text className="text-blue-500">Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Button 2</Text>
          </TouchableOpacity>
        </TopNav>
        <View className="mb-4 mt-4">
          <Card>
            <CardContent>
              <CardTitle>Login</CardTitle>
              <CardSubtitle>A basic login template</CardSubtitle>
            </CardContent>
            <CardFooter>
              <TouchableOpacity
                onPress={handleNavigateToLogin}
                className="rounded-md bg-blue-500 px-4 py-2">
                <Text className="text-white">See Template</Text>
              </TouchableOpacity>
            </CardFooter>
          </Card>
        </View>
        <Card>
          <CardContent>
            <CardTitle>User Profile</CardTitle>
            <CardSubtitle>A basic profile template</CardSubtitle>
          </CardContent>
          <CardFooter>
            <TouchableOpacity
              onPress={handleNavigateToProfile}
              className="rounded-md bg-blue-500 px-4 py-2">
              <Text className="text-white">See Template</Text>
            </TouchableOpacity>
          </CardFooter>
        </Card>
      </View>
    </SafeAreaView>
  );
}
