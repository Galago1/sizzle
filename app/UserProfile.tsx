import { Entypo } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useNavigation } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AvatarAndText from '~/components/AvatarAndText';
import { Bar, BarGroup } from '~/components/Bar';
import { Card, CardContent } from '~/components/nativewindui/Card';
import { Text } from '~/components/nativewindui/Text';
import { TopNav } from '~/components/TopNav';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Toggle } from '~/components/nativewindui/Toggle';

export default function UserProfile() {
  const navigation = useNavigation();
  const [switchValue, setSwitchValue] = React.useState(true);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 p-4">
      <TouchableOpacity className="mb-8" onPress={() => router.back()}>
        <Entypo name="chevron-thin-left" size={24} color="black" />
      </TouchableOpacity>
      <TopNav title="User Profile" />
      <ScrollView className="mt-4">
        <View>
          <View className="relative flex-row items-center">
            <AvatarAndText title="John Doe" subtitle="john.doe@example.com" fallbackText="JD" />
            <MaterialCommunityIcons
              name="pencil-circle-outline"
              size={40}
              color="black"
              className="absolute right-0"
            />
          </View>
          <View className="mt-4">
            <Text className="mb-2 font-['Inter'] text-sm font-normal text-gray-600">
              Subscription
            </Text>
            <Card rootClassName="shadow-none">
              <CardContent>
                <View>
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text className="mb-1 font-['Inter'] text-xl font-light text-gray-600">
                        Premium Subscription
                      </Text>
                      <Text className="font-['Inter'] text-xs font-normal normal-case text-gray-600">
                        Renews on{' '}
                        <Text className="font-['Inter'] text-xs font-bold normal-case text-gray-600">
                          12th Nov, 2024
                        </Text>
                      </Text>
                    </View>
                    <Text className="font-['Inter'] text-2xl font-light text-gray-600">$13</Text>
                  </View>
                  <TouchableOpacity className="mt-4 rounded-full border border-gray-600 py-3">
                    <Text className="text-center font-['Inter'] font-semibold text-gray-600">
                      Manage subscription
                    </Text>
                  </TouchableOpacity>
                </View>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Text className="mb-2 font-['Inter'] text-sm font-normal text-gray-600">Security</Text>
            <Bar
              startAdornment={<MaterialCommunityIcons name="account-lock" size={24} color="gray" />}
              title="Reset Password"
              link="/ResetPassword"
            />
            <Text className="mb-2 mt-4 font-['Inter'] text-sm font-normal text-gray-600">
              Notifications
            </Text>
            <Bar
              startAdornment={<AntDesign name="bells" size={24} color="gray" />}
              title="Turn on App notifications"
              link="/ResetPassword"
              endAdornment={<Toggle value={switchValue} onValueChange={setSwitchValue} />}
            />
            <Text className="mb-2 mt-4 font-['Inter'] text-sm font-normal text-gray-600">
              Others
            </Text>
            <BarGroup>
              <Bar
                startAdornment={
                  <MaterialCommunityIcons name="help-circle-outline" size={24} color="gray" />
                }
                title="Help & Support"
                link="/help-support"
              />
              <Bar
                startAdornment={
                  <MaterialCommunityIcons name="file-document-outline" size={24} color="gray" />
                }
                title="Legal Information"
                link="/legal-info"
              />
            </BarGroup>
            <Bar
              className="mt-4 bg-gray-300"
              title="Logout"
              endAdornment={<MaterialIcons name="logout" size={24} color="gray" />}
              link="/logout"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
