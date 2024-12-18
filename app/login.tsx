import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useNavigation } from 'expo-router';
import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/components/nativewindui/Text';
import { TextField } from '~/components/nativewindui/TextField';

export default function Screen() {
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
      <Text className="mt-4 font-['Inter'] text-2xl font-light text-gray-600">Login</Text>
      <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
        Continue where you left off
      </Text>
      <TextField
        className="rounded-xl bg-white font-['Inter']"
        labelClassName="font-normal text-gray-600 text-sm"
        label="Email"
        leftView={<MaterialIcons name="email" size={20} color="gray" />}
      />
      <TextField
        className="rounded-xl bg-white font-['Inter']"
        label="Password"
        labelClassName="font-normal text-gray-600 text-sm"
        secureTextEntry
        leftView={<MaterialIcons name="password" size={20} color="gray" />}
      />
      <TouchableOpacity onPress={() => router.push('/ForgotPassword')}>
        <Text className="p-1 font-['Inter'] text-sm font-normal text-gray-600 underline">
          Forgot Password
        </Text>
      </TouchableOpacity>
      <View className="mb-4 flex-1 justify-end">
        <TouchableOpacity className="rounded-full bg-gray-600 py-3">
          <Text className="text-center font-['Inter'] font-semibold text-white">Login</Text>
        </TouchableOpacity>
        <View className="mt-4 flex-row justify-center">
          <Text className="font-['Inter'] text-sm text-gray-600">Not a member? </Text>
          <TouchableOpacity onPress={() => router.push('/SignUp')}>
            <Text className="font-['Inter'] text-sm font-normal text-gray-600 underline">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
