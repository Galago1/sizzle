import { useRouter } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { TopNav } from '~/components/TopNav';
import {
  Card,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from '~/components/nativewindui/Card';
import { Text } from '~/components/nativewindui/Text';

export default function Screen() {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/login');
  };

  const handleNavigateToProfile = () => {
    router.push('/UserProfile');
  };

  const handleNavigateToTutorial = () => {
    router.push('/Tutorial');
  };

  const handleNavigateToOnboarding = () => {
    router.push('/Onboarding');
  };

  return (
    <SafeAreaView className="flex-1 ">
      <View className="mx-4">
        <TopNav title="Templates">
          <TouchableOpacity className="mr-4">
            <Text className="text-blue-500">Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Button 2</Text>
          </TouchableOpacity>
        </TopNav>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}>
          <View className="mb-4 mt-4">
            <Card rootClassName="shadow-none">
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
          <Card rootClassName="shadow-none">
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
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <CardTitle>Tutorial</CardTitle>
                <CardSubtitle>Walk through a Tutorial</CardSubtitle>
              </CardContent>
              <CardFooter>
                <TouchableOpacity
                  onPress={handleNavigateToTutorial}
                  className="rounded-md bg-blue-500 px-4 py-2">
                  <Text className="text-white">See Template</Text>
                </TouchableOpacity>
              </CardFooter>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <CardTitle>Onboarding</CardTitle>
                <CardSubtitle>Step by Step Onboarding</CardSubtitle>
              </CardContent>
              <CardFooter>
                <TouchableOpacity
                  onPress={handleNavigateToOnboarding}
                  className="rounded-md bg-blue-500 px-4 py-2">
                  <Text className="text-white">See Template</Text>
                </TouchableOpacity>
              </CardFooter>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
