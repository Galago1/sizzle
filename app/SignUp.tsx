import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '~/components/nativewindui/Text';
import { TextField } from '~/components/nativewindui/TextField';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 px-4">
      <TouchableOpacity className="mb-8" onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <MaterialIcons name="login" size={24} color="black" />
      <Text className="mt-6 text-2xl text-gray-600">Create Account </Text>
      <Text className="mb-4 text-sm text-gray-600">
        Start your journey to becoming your best self
      </Text>

      <TextField
        className="rounded-xl bg-white"
        label="Name"
        containerClassName="mb-4"
        placeholder="Enter your name"
        leftView={<Feather name="user" size={24} color="gray" />}
      />
      <TextField
        className="rounded-xl bg-white"
        label="Email"
        containerClassName="mb-4"
        placeholder="Enter your email"
        leftView={<MaterialIcons name="email" size={20} color="gray" />}
      />
      <TextField
        className="rounded-xl bg-white"
        label="Password"
        placeholder="Enter a password"
        secureTextEntry
        leftView={<MaterialIcons name="password" size={20} color="gray" />}
      />

      <View className="mb-8 flex-1 justify-end">
        <View className="mt-4 flex-row justify-center">
          <Text className="text-sm"> By continuing, you agree to our </Text>
          <TouchableOpacity onPress={() => router.push('/SignUp')}>
            <Text className="text-sm font-semibold text-gray-600 underline">Terms of Service</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-sm"> and </Text>
          <TouchableOpacity onPress={() => router.push('/SignUp')}>
            <Text className="text-sm font-semibold text-gray-600 underline">Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="rounded-xl bg-gray-600 py-3">
          <Text className="text-center font-semibold text-white">Create My Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
