import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from '@roninoss/icons';
import * as React from 'react';
import { Animated, Platform, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import {
  FadeIn,
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
  ZoomInEasyUp,
  ZoomOutEasyDown,
} from 'react-native-reanimated';

import { TopNav } from '~/components/TopNav';
import { ActivityIndicator } from '~/components/nativewindui/ActivityIndicator';
import { Alert } from '~/components/nativewindui/Alert';
import { Avatar, AvatarImage, AvatarFallback } from '~/components/nativewindui/Avatar';
import { Badge } from '~/components/nativewindui/Badge';
import { Button } from '~/components/nativewindui/Button';
import { Card, CardContent } from '~/components/nativewindui/Card';
import { Checkbox } from '~/components/nativewindui/Checkbox';
import { ProgressIndicator } from '~/components/nativewindui/ProgressIndicator';
import { Slider } from '~/components/nativewindui/Slider';
import { Stepper } from '~/components/nativewindui/Stepper';
import { Text } from '~/components/nativewindui/Text';
import { TextField } from '~/components/nativewindui/TextField';
import { Toggle } from '~/components/nativewindui/Toggle';
import { useColorScheme } from '~/lib/useColorScheme';

export default function Screen() {
  const { colors } = useColorScheme();
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(13);
  const [count, setCount] = React.useState(0);
  let id: ReturnType<typeof setInterval> | null = null;

  React.useEffect(() => {
    if (!id) {
      id = setInterval(() => {
        setProgress((prev) => (prev >= 99 ? 0 : prev + 5));
      }, 1000);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, []);

  function subtract() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }

  function add() {
    setCount((prev) => prev + 1);
  }

  const [switchValue, setSwitchValue] = React.useState(true);

  return (
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <TopNav title="Atoms">
          <TouchableOpacity className="mr-4">
            <Text className="text-blue-500">Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Button 2</Text>
          </TouchableOpacity>
        </TopNav>
      </View>
      <View className="mx-4">
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <View>
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Activity Indicator</Text>
                <ActivityIndicator className="mt-2" />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Alert</Text>
                <Alert
                  title="Discard draft?"
                  message="Some message that is kind of important since it is in an alert."
                  buttons={[
                    {
                      text: 'Cancel',
                      style: 'cancel',
                      onPress: (text) => {
                        console.log('Cancel Pressed', text);
                      },
                    },
                    {
                      text: 'OK',
                      onPress: (text) => {
                        console.log('OK Pressed', text);
                      },
                    },
                  ]}>
                  <TouchableOpacity className="mt-2 rounded-full bg-gray-600 py-3">
                    <Text className="text-center font-['Inter'] font-semibold text-white">
                      Show Alert
                    </Text>
                  </TouchableOpacity>
                </Alert>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Avatar</Text>
                <View className="mt-2 items-center">
                  <Avatar alt="NativeWindUI Avatar">
                    <AvatarImage
                      source={{
                        uri: 'https://pbs.twimg.com/profile_images/1782428433898708992/1voyv4_A_400x400.jpg',
                      }}
                    />
                    <AvatarFallback>
                      <Text className="text-foreground">NUI</Text>
                    </AvatarFallback>
                  </Avatar>
                </View>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Badge</Text>
                <View className="flex-1 items-center justify-center py-4">
                  <View className="flex-row gap-8">
                    <View>
                      <Icon name="bell-outline" color={colors.foreground} />
                      <Badge />
                    </View>
                    <View>
                      <Icon name="bell-outline" color={colors.foreground} />
                      <Badge>6</Badge>
                    </View>
                    <View>
                      <Icon name="bell-outline" color={colors.foreground} />
                      <Badge variant="info" />
                    </View>
                    <View>
                      <Icon name="bell-outline" color={colors.foreground} />
                      <Badge variant="info" maxCount={9}>
                        10
                      </Badge>
                    </View>
                  </View>
                </View>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Button</Text>
                <View className="flex-1 items-center justify-center gap-8">
                  <Button>
                    <Icon name="play" color="white" size={21} />
                    <Text>Primary</Text>
                  </Button>
                  <Button variant="secondary">
                    <Text>Secondary</Text>
                  </Button>
                  <Button
                    onPress={() => {
                      setIsLoading((prev) => !prev);
                    }}
                    variant="tonal">
                    {isLoading && (
                      <Animated.View>
                        <ActivityIndicator size="small" />
                      </Animated.View>
                    )}
                    <Text>Tonal</Text>
                  </Button>
                  <Button variant="plain">
                    <Text>Plain</Text>
                  </Button>
                  <Button variant="tonal" size="icon">
                    <Icon
                      name="heart"
                      color={Platform.OS === 'ios' ? colors.primary : colors.foreground}
                      size={21}
                    />
                  </Button>
                </View>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Checkbox</Text>
                <View className="flex-1 items-center justify-center py-4">
                  <Checkbox />
                </View>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Progress Indicator</Text>
                <ProgressIndicator value={progress} className="mt-2" />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Slider</Text>
                <Slider value={0.5} />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Stepper</Text>
                <View className="flex-1 items-center justify-center ">
                  <View className="flex-row items-center gap-1">
                    <Text>Stepper: </Text>
                    <FlipCounter count={count} />
                  </View>
                  <Stepper
                    subtractButton={{ disabled: count === 0, onPress: subtract }}
                    addButton={{ onPress: add }}
                  />
                </View>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Text</Text>
                <Text variant="largeTitle" className="text-center">
                  Large Title
                </Text>
                <Text variant="title1" className="text-center">
                  Title 1
                </Text>
                <Text variant="title2" className="text-center">
                  Title 2
                </Text>
                <Text variant="title3" className="text-center">
                  Title 3
                </Text>
                <Text variant="heading" className="text-center">
                  Heading
                </Text>
                <Text variant="body" className="text-center">
                  Body
                </Text>
                <Text variant="callout" className="text-center">
                  Callout
                </Text>
                <Text variant="subhead" className="text-center">
                  Subhead
                </Text>
                <Text variant="footnote" className="text-center">
                  Footnote
                </Text>
                <Text variant="caption1" className="text-center">
                  Caption 1
                </Text>
                <Text variant="caption2" className="text-center">
                  Caption 2
                </Text>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Text Field</Text>
                <TextField
                  leftView={<MaterialIcons name="email" size={20} color="gray" />}
                  label="Email"
                  className="bg-gray-800 dark:bg-gray-800"
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Toggle</Text>
                <View className="flex-1 items-center">
                  <Toggle value={switchValue} onValueChange={setSwitchValue} />
                </View>
              </CardContent>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function FlipCounter({ count }: { count: number }) {
  const id = React.useId();
  return (
    <View className="overflow-hidden">
      <LayoutAnimationConfig skipEntering>
        <Animated.View key={`${id}-wrapper-${count}`}>
          <Animated.View key={`${id}-inner-${count}`}>
            <Text className="font-medium text-primary">{count}</Text>
          </Animated.View>
        </Animated.View>
      </LayoutAnimationConfig>
    </View>
  );
}
