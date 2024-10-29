import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image } from 'expo-image';
import * as React from 'react';
import { SafeAreaView, TouchableOpacity, View, Share, Platform, ScrollView } from 'react-native';

import { Button } from '~/components/Button';
import { TopNav } from '~/components/TopNav';
import BarChart from '~/components/nativewindui/BarChart';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardImage,
  CardSubtitle,
  CardTitle,
} from '~/components/nativewindui/Card';
import EmptyStateCard from '~/components/nativewindui/Cards/EmptyStateCard';
import { ESTIMATED_ITEM_HEIGHT, List, ListItem } from '~/components/nativewindui/List';
import RectangleChart from '~/components/nativewindui/RectangleChart';
import { Text } from '~/components/nativewindui/Text';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CardWithIcon from '~/components/nativewindui/Cards/CardWithIcon';
import { SideImageCard } from '~/components/nativewindui/Cards/SideImageCard';
import { ProgressIndicator } from '~/components/nativewindui/ProgressIndicator';
import { QuoteCard } from '~/components/nativewindui/Cards/QuoteCard';
import IconCard from '~/components/nativewindui/Cards/IconCard';
import { FooterCard } from '~/components/nativewindui/Cards/FooterCard';
import Feather from '@expo/vector-icons/Feather';

export default function Screen() {
  // Add the share function
  const share = async () => {
    try {
      const result = await Share.share({
        message: 'NativeWindUI | Familiar interface, native feel.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <TopNav title="Organisms">
          <TouchableOpacity className="mr-4">
            <Text className="text-blue-500">Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Button 2</Text>
          </TouchableOpacity>
        </TopNav>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Activity View</Text>
                <TouchableOpacity className="mt-4 rounded-full bg-gray-600 py-3" onPress={share}>
                  <Text className="text-center font-['Inter'] font-semibold text-white">Share</Text>
                </TouchableOpacity>
              </CardContent>
            </Card>
          </View>
          {/* <View className="mt-4">
          <Card rootClassName="shadow-none">
            <CardContent>
              <Text className="font-['Inter'] font-light">Adaptive Search</Text>
              <AdaptiveSearchHeader iosTitle="Adaptive Search Header" />
            </CardContent>
          </Card>
        </View> */}
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Card</Text>
                <Card className="min-h-[500px]">
                  <CardImage
                    source={{
                      uri: 'https://cdn.pixabay.com/photo/2023/04/11/18/35/pikachu-7917962_640.jpg',
                    }}
                  />
                  <CardContent
                    linearGradientColors={Platform.select({
                      ios: ['transparent', '#0E172488', '#0E1724EE'],
                    })}
                    className="ios:flex-col-reverse ios:gap-3 gap-1">
                    <CardTitle className="ios:text-white pr-8">
                      Pre-Order Pokémon TCG Pocket
                    </CardTitle>
                    <CardSubtitle className="ios:text-white">Pre-Order</CardSubtitle>
                  </CardContent>

                  <CardFooter style={Platform.select({ ios: { backgroundColor: '#0E1724EE' } })}>
                    <Image
                      source={{
                        uri: 'https://static.wikia.nocookie.net/pokemongo/images/c/c1/AppIcon_Standard.png/revision/latest?cb=20220304130349',
                      }}
                      style={{ width: 44, height: 44, borderRadius: 12 }}
                    />
                    <View className="flex-1 pr-4">
                      <Text variant="subhead" className="ios:text-white font-bold">
                        Pokémon TCP Pocket
                      </Text>
                      <CardDescription
                        numberOfLines={1}
                        variant="subhead"
                        className="ios:text-white opacity-70">
                        Enjoy Pokémon cards with your friends
                      </CardDescription>
                      <Text variant="footnote" className="text-primary">
                        Coming soon
                      </Text>
                    </View>
                    <View className="ios:items-center gap-1">
                      <Button className="ios:px-6 ios:rounded-full ios:py-0.5">
                        <Text>Get</Text>
                      </Button>
                      <Text variant="caption2" className="text-muted-foreground">
                        In-App Purchases
                      </Text>
                    </View>
                  </CardFooter>
                </Card>
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">List</Text>
                <List
                  data={[
                    {
                      id: '1',
                      title: 'Hello',
                      subTitle: 'World',
                    },
                    {
                      id: '2',
                      title: 'Hello',
                      subTitle: 'World',
                    },

                    {
                      id: '3',
                      title: 'Hello',
                      subTitle: 'World',
                    },
                  ]}
                  estimatedItemSize={ESTIMATED_ITEM_HEIGHT.withSubTitle}
                  renderItem={(info) => {
                    return <ListItem {...info} />;
                  }}
                  keyExtractor={(item) => item.id}
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Bar Chart</Text>
                <BarChart
                  data={[
                    { day: 'SUN', total: 10, completed: 6 },
                    { day: 'MON', total: 12, completed: 8 },
                    { day: 'TUE', total: 18, completed: 10 },
                    { day: 'WED', total: 16, completed: 12 },
                    { day: 'THR', total: 10, completed: 7 },
                    { day: 'FRI', total: 18, completed: 13 },
                    { day: 'SAT', total: 18, completed: 18 },
                  ]}
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Rectangle Chart</Text>
                <RectangleChart
                  data={[
                    0.7, 0.3, 0.5, 0.8, 0.6, 0.4, 0.9, 0.5, 0.6, 0.7, 0.4, 0.8, 0.3, 0.5, 0.9, 0.4,
                    0.6, 0.3, 0.7, 0.5, 0.8, 0.6, 0.8, 0.5, 0.3, 0.7, 0.4, 0.9, 0.5, 0.7, 0.6, 0.8,
                    0.4, 0.2, 0.1,
                  ]}
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Empty State Card</Text>
                <EmptyStateCard
                  title="Your vision awaits"
                  description="Define your aspirations and start your journey toward the life you want."
                  buttonText="Create Vision"
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Card with Icon</Text>
                <CardWithIcon
                  title="Your vision awaits"
                  description="Define your aspirations and start your journey toward the life you want."
                  icon={<FontAwesome5 name="edit" size={24} color="black" />}
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Card with Icon</Text>
                <SideImageCard
                  imageSource={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJaTQAtlNXMOYt8UIJ3OqduivNQ_IyXeFqA&s',
                  }}
                  title="Charmander"
                  subtitle="Fire Type"
                  progress={10}
                  total={100}
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Quote Card</Text>
                <QuoteCard
                  quote="The only way to do great work is to love what you do."
                  author="Steve Jobs"
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Icon Card</Text>
                <IconCard
                  title="My Vision"
                  description="My vision is to lead a life filled with balance, where I prioritize strong relationships, personal growth, and maintaining my health. I will nurture my creativity and embrace new learning opportunities, while striving for financial freedom and inner peace."
                  icon={
                    <FontAwesome6
                      name="mountain-sun"
                      size={24}
                      color="black"
                      className="mb-2 mt-4"
                    />
                  }
                />
              </CardContent>
            </Card>
          </View>
          <View className="mt-4">
            <Card rootClassName="shadow-none">
              <CardContent>
                <Text className="font-['Inter'] font-light">Footer Card</Text>
                <FooterCard
                  title="My Vision"
                  description="My vision is to lead a life filled with balance, where I prioritize strong relationships, personal growth, and maintaining my health. I will nurture my creativity and embrace new learning opportunities, while striving for financial freedom and inner peace."
                  footerIcon={<Feather name="target" size={24} color="black" />}
                  footerContent={
                    <View className="flex-row items-center gap-1">
                      <Text className="font-['Inter'] text-sm text-gray-600">12:18am</Text>
                      <View className="h-2 w-2 rounded-full bg-gray-500" />
                      <Text className="font-['Inter'] text-sm text-gray-600">Oct 23</Text>
                    </View>
                  }
                />
              </CardContent>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
