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
  const [isLinkSent, setIsLinkSent] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSendRecovery = () => {
    setIsLinkSent(true);
  };

  return (
    <SafeAreaView className="flex-1 px-4">
      {!isLinkSent ? (
        <>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="mt-6 font-['Inter'] text-2xl font-light text-gray-600">
            Forgot Password?
          </Text>
          <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
            Please enter your email below and we will send a reset link
          </Text>
          <TextField
            className="rounded-xl bg-white font-['Inter']"
            label="Email"
            labelClassName="font-normal text-gray-600 text-sm"
            placeholder="Enter your email"
            leftView={<MaterialIcons name="email" size={20} color="gray" />}
          />

          <View className="mb-8 flex-1 justify-end">
            <TouchableOpacity className="rounded-xl bg-gray-600 py-3" onPress={handleSendRecovery}>
              <Text className="text-center font-['Inter'] font-semibold text-white">
                Send Password Recovery
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View className="mb-6 ">
            <View className="h-14 w-14 items-center justify-center rounded-full bg-white">
              <Feather name="check" size={20} color="black" />
            </View>
          </View>
          <Text className="mt-6 font-['Inter'] text-2xl font-light text-gray-600">
            Password Reset Link Sent
          </Text>
          <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
            If your account is associated with this email address, you will receive an email to
            reset your password. If not, please try another email.
          </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="p-1 font-['Inter'] text-sm font-normal text-gray-600 underline">
              Back to Login
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
