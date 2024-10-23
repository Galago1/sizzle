import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '~/components/nativewindui/Text';
import { TextField } from '~/components/nativewindui/TextField';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

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
        <Entypo name="chevron-thin-left" size={24} color="black" />
      </TouchableOpacity>
      <MaterialIcons name="login" size={24} color="black" />
      <Text className="mt-6 font-['Inter'] text-2xl font-light text-gray-600">Create Account </Text>
      <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
        Start your journey to becoming your best self
      </Text>

      <TextField
        className="rounded-xl bg-white font-['Inter']"
        label="Name"
        containerClassName="mb-4"
        labelClassName="font-normal text-gray-600 text-sm"
        placeholder="Enter your name"
        leftView={<Feather name="user" size={24} color="gray" />}
      />
      <TextField
        className="rounded-xl bg-white font-['Inter']"
        label="Email"
        containerClassName="mb-4"
        labelClassName="font-normal text-gray-600 text-sm"
        placeholder="Enter your email"
        leftView={<MaterialIcons name="email" size={20} color="gray" />}
      />
      <TextField
        className="rounded-xl bg-white font-['Inter']"
        labelClassName="font-normal text-gray-600 text-sm"
        label="Password"
        placeholder="Enter a password"
        secureTextEntry
        leftView={<MaterialIcons name="password" size={20} color="gray" />}
      />

      <View className="mb-8 flex-1 justify-end">
        <View className="mt-4 flex-row justify-center">
          <Text className="font-['Inter'] text-xs text-gray-600">
            {' '}
            By continuing, you agree to our{' '}
          </Text>
          <TouchableOpacity>
            <Text className="font-['Inter'] text-xs font-normal text-gray-600 underline">
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mb-1 flex-row justify-center">
          <Text className="font-['Inter'] text-xs text-gray-600"> & </Text>
          <TouchableOpacity>
            <Text className="font-['Inter'] text-xs font-normal text-gray-600 underline">
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="rounded-xl bg-gray-600 py-3">
          <Text className="text-center font-['Inter'] font-normal text-white">
            Create My Account
          </Text>
        </TouchableOpacity>
        <View className="mt-4 flex-row justify-center">
          <Text className="font-['Inter'] text-sm text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="font-['Inter'] text-sm font-normal text-gray-600 underline">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
