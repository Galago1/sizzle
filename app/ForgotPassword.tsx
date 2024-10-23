import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '~/components/nativewindui/Text';
import { TextField } from '~/components/nativewindui/TextField';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useNavigation } from 'expo-router';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 px-4">
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="mt-6 font-['Inter'] text-2xl text-gray-600">Forgot Password?</Text>
      <Text className="mb-4 font-['Inter'] text-sm text-gray-600">
        Please enter your email below and we will send a reset link
      </Text>

      <TextField
        className="rounded-xl bg-white font-['Inter']"
        label="Email"
        placeholder="Enter your email"
        leftView={<MaterialIcons name="email" size={20} color="gray" />}
      />

      <View className="mb-8 flex-1 justify-end">
        <TouchableOpacity className="rounded-xl bg-gray-600 py-3">
          <Text className="text-center font-['Inter'] font-semibold text-white">
            Send Password Recovery
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
