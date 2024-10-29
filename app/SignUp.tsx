import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useNavigation } from 'expo-router';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Form, FormItem } from '~/components/nativewindui/Form';
import { Text } from '~/components/nativewindui/Text';
import { TextField } from '~/components/nativewindui/TextField';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasEightChars, setHasEightChars] = useState(false);
  const [hasOneLetter, setHasOneLetter] = useState(false);
  const [hasOneNumber, setHasOneNumber] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);
  };

  useEffect(() => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (password && !validatePassword(password)) {
      setPasswordError('Password does not meet requirements');
    } else {
      setPasswordError('');
    }
  }, [password]);

  useEffect(() => {
    setHasEightChars(password.length >= 8);
    setHasOneLetter(/[A-Za-z]/.test(password));
    setHasOneNumber(/\d/.test(password));
  }, [password]);

  const isFormValid = name.trim() !== '' && validateEmail(email) && validatePassword(password);

  const handleSubmit = () => {
    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="p-4 flex-grow">
          <TouchableOpacity className="mb-8" onPress={() => router.back()}>
            <Entypo name="chevron-thin-left" size={24} color="black" />
          </TouchableOpacity>

          {!isSubmitted ? (
            <>
              <MaterialIcons name="login" size={24} color="black" />
              <Text className="mt-6 font-['Inter'] text-2xl font-light text-gray-600">
                Create Account{' '}
              </Text>
              <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
                Start your journey to becoming your best self
              </Text>

              <Form>
                <View>
                  <FormItem>
                    <TextField
                      className="rounded-xl bg-white font-['Inter']"
                      label="Name"
                      labelClassName="font-normal text-gray-600 text-sm"
                      placeholder="Enter your name"
                      leftView={<Feather name="user" size={24} color="gray" />}
                      value={name}
                      onChangeText={setName}
                    />
                  </FormItem>
                  <FormItem>
                    <TextField
                      className="rounded-xl bg-white font-['Inter']"
                      label="Email"
                      labelClassName="font-normal text-gray-600 text-sm"
                      placeholder="Enter your email"
                      leftView={<MaterialIcons name="email" size={20} color="gray" />}
                      value={email}
                      onChangeText={setEmail}
                      errorMessage={emailError}
                    />
                  </FormItem>
                  <FormItem>
                    <TextField
                      className="rounded-xl bg-white font-['Inter']"
                      labelClassName="font-normal text-gray-600 text-sm"
                      label="Password"
                      placeholder="Enter a password"
                      secureTextEntry
                      leftView={<MaterialIcons name="password" size={20} color="gray" />}
                      value={password}
                      onChangeText={setPassword}
                      errorMessage={passwordError}
                    />
                    <Text className="mb-1 mt-2 font-['Inter'] text-xs text-gray-600">
                      Password must contain:
                    </Text>
                    <View className="mb-1 flex-row">
                      <AntDesign
                        name="checkcircleo"
                        size={16}
                        color={hasEightChars ? 'green' : 'black'}
                        className="mr-1"
                      />
                      <Text
                        className={`font-['Inter'] text-xs ${hasEightChars ? 'text-green-600' : 'text-gray-600'}`}>
                        At least 8 characters
                      </Text>
                    </View>
                    <View className="mb-1 flex-row">
                      <AntDesign
                        name="checkcircleo"
                        size={16}
                        color={hasOneLetter ? 'green' : 'black'}
                        className="mr-1"
                      />
                      <Text
                        className={`font-['Inter'] text-xs ${hasOneLetter ? 'text-green-600' : 'text-gray-600'}`}>
                        At least 1 letter
                      </Text>
                    </View>
                    <View className="mb-1 flex-row">
                      <AntDesign
                        name="checkcircleo"
                        size={16}
                        color={hasOneNumber ? 'green' : 'black'}
                        className="mr-1"
                      />
                      <Text
                        className={`font-['Inter'] text-xs ${hasOneNumber ? 'text-green-600' : 'text-gray-600'}`}>
                        At least 1 number
                      </Text>
                    </View>
                  </FormItem>
                </View>
              </Form>
            </>
          ) : (
            <>
              <View className="flex-1">
                <Text className=" font-['Inter'] text-2xl font-light text-gray-600">
                  Verify your email
                </Text>
                <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
                  We sent you an email to {email}. Click the link inside to get started
                </Text>
                <TouchableOpacity>
                  <Text className="font-['Inter'] text-sm font-normal text-gray-600 underline">
                    Resend Email
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="mt-auto ">
                <TouchableOpacity className="rounded-full bg-gray-400 py-3" disabled>
                  <Text className="text-center font-['Inter'] font-semibold text-white">
                    I've verified my email
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>

        {!isSubmitted && (
          <View className="p-4">
            <View className="mb-8">
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
              <TouchableOpacity
                className={`rounded-full py-3 ${isFormValid ? 'bg-gray-600' : 'bg-gray-400'}`}
                disabled={!isFormValid}
                onPress={handleSubmit}>
                <Text className="text-center font-['Inter'] font-semibold text-white">
                  Create My Account
                </Text>
              </TouchableOpacity>
              <View className="mt-4 flex-row justify-center">
                <Text className="font-['Inter'] text-sm text-gray-600">
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => router.push('/login')}>
                  <Text className="font-['Inter'] text-sm font-normal text-gray-600 underline">
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
