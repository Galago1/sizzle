import * as React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
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
import { Text } from '~/components/nativewindui/Text';
import { TextField } from '~/components/nativewindui/TextField';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
  return (
    <SafeAreaView className="flex-1 px-4">
      <MaterialIcons name="login" size={24} color="black" />
      <Text className="mt-4 text-2xl font-light">Login</Text>
      <Text className="mb-4 text-sm">Continue where you left off</Text>
      <TextField
        className=" rounded-xl bg-white"
        label="Email"
        leftView={<MaterialIcons name="email" size={20} color="gray" />}
      />
      <TextField
        className="rounded-xl bg-white"
        label="Password"
        secureTextEntry
        leftView={<MaterialIcons name="password" size={20} color="gray" />}
      />
      <View className="mb-4 flex-1 justify-end">
        <TouchableOpacity className="rounded-xl bg-blue-500 py-3">
          <Text className="text-center font-semibold text-white">Login</Text>
        </TouchableOpacity>
        <View className="mt-4 flex-row justify-center">
          <Text className="text-sm">Not a member? </Text>
          <TouchableOpacity>
            <Text className="text-sm font-semibold text-gray-600 underline">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
