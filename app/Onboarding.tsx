import { useNavigation, router } from 'expo-router';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chip from '~/components/Chip';
import ChipList from '~/components/ChipList';
import { Text } from '~/components/nativewindui/Text';
import Feather from '@expo/vector-icons/Feather';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import { ProgressIndicator } from '~/components/nativewindui/ProgressIndicator';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import CardSelectionGroup from '~/components/CardSelectionGroup';
import { TextField } from '~/components/nativewindui/TextField';

export default function Onboarding() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = React.useState<
    'intro' | 'values' | 'goals' | 'goals2' | 'complete'
  >('intro');
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const sheetRef = useSheetRef();
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleAddMore = React.useCallback(() => {
    sheetRef.current?.present();
  }, []);

  const visionStatements = [
    {
      title: 'Personal and Balanced Life',
      description:
        'My vision is to lead a life filled with balance, where I prioritize strong relationships, personal growth, and maintaining my health. I will nurture my creativity and embrace new learning opportunities, while striving for financial freedom and inner peace.',
    },
    {
      title: 'Career and Impact',
      description:
        'In five years, I see myself thriving in my career, using my leadership and problem-solving skills to make a meaningful impact. I will work toward building a legacy of resilience and innovation while balancing family, adventure, and personal well-being.',
    },
  ];

  return (
    <SafeAreaView className="h-full">
      {currentStep === 'intro' ? (
        <View className="mx-4 h-full">
          <Image source={require('../assets/step2.png')} className="h-3/5 w-full" />
          <View className="mt-4 flex-1 justify-end pb-8">
            <Text className={"mb-1 font-['Inter'] text-sm font-semibold"}>STEP 1</Text>
            <Text className="mb-1 font-['Inter'] text-2xl font-light">
              Vision, Define your aspirational self
            </Text>
            <Text className="mb-6 font-['Inter'] font-normal">
              We have a few short questions to learn about your vision. This will help you create a
              vision statement.
            </Text>
            <TouchableOpacity
              className="rounded-full bg-gray-600 py-3"
              onPress={() => setCurrentStep('values')}>
              <Text className="text-center font-['Inter'] font-semibold text-white">Start Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : currentStep === 'values' ? (
        <View className="mx-4 h-full">
          <View className="mb-6 flex-row items-center justify-between">
            <TouchableOpacity
              className="mr-2 rounded-full p-2 active:opacity-70"
              onPress={() => setCurrentStep('intro')}>
              <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <ProgressIndicator value={25} className="w-11/12" indicatorClassName="bg-gray-800" />
          </View>
          <Text className="mb-1 font-['Inter'] text-2xl font-light text-gray-600">
            What are your core values?
          </Text>
          <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
            Select the values that guide your life. Choose from our suggestions or enter your own to
            reflect what matters most to you.
          </Text>
          <View className="flex-1">
            <ChipList
              labels={[
                'Integrity',
                'Growth',
                'Compassion',
                'Accountability',
                'Honesty',
                'Creativity',
                'Independence',
                'Resilience',
                'Leadership',
                'Empathy',
                'Adventure',
                'Learning',
                'Kindness',
                'Confidence',
                'Family',
                'Courage',
                'Gratitude',
                'Community',
                'Balance',
                'Curiosity',
              ]}
              selectedLabels={selectedValues}
              onSelectionChange={setSelectedValues}
            />
            <Chip
              icon={<Feather name="plus" size={24} color="black" />}
              label="Add More"
              variant="outlined"
              onPress={handleAddMore}
              className="mt-2"
            />
          </View>
          <View className="flex-row justify-between pb-8">
            <Entypo
              name="chevron-with-circle-left"
              size={48}
              color="black"
              onPress={() => setCurrentStep('intro')}
            />
            <TouchableOpacity
              className="rounded-full bg-gray-600 px-6 py-3"
              onPress={() => setCurrentStep('goals')}>
              <Text className="text-center font-['Inter'] font-semibold text-white">Next</Text>
            </TouchableOpacity>
          </View>
          <Sheet ref={sheetRef} snapPoints={['50%']}>
            <View className="p-4">
              <Text className="font-['Inter'] text-lg font-semibold">Add Custom Value</Text>
            </View>
          </Sheet>
        </View>
      ) : currentStep === 'goals' ? (
        <View className="mx-4 h-full">
          <View className="mb-6 flex-row items-center justify-between">
            <TouchableOpacity
              className="mr-2 rounded-full p-2 active:opacity-70"
              onPress={() => setCurrentStep('values')}>
              <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <ProgressIndicator value={50} className="w-11/12" indicatorClassName="bg-gray-800" />
          </View>
          <Text className="mb-1 font-['Inter'] text-2xl font-light text-gray-600">
            What do you enjoy doing?
          </Text>
          <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
            What activities bring you joy or make you feel fulfilled? Take a moment to reflect on
            what you truly enjoy doing.
          </Text>
          <View className="flex-1">
            <TextField
              className="h-32 rounded-xl border border-gray-800 bg-gray-50 p-4"
              placeholder="e.g., hiking, painting, spending time with friends, learning new skills"
              multiline
              textAlignVertical="top"
            />
          </View>
          <View className="flex-row justify-between pb-8">
            <Entypo
              name="chevron-with-circle-left"
              size={48}
              color="black"
              onPress={() => setCurrentStep('values')}
            />
            <TouchableOpacity
              className="rounded-full bg-gray-600 px-6 py-3"
              onPress={() => setCurrentStep('goals2')}>
              <Text className="text-center font-['Inter'] font-semibold text-white">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : currentStep === 'goals2' ? (
        <View className="mx-4 h-full">
          <View className="mb-6 flex-row items-center justify-between">
            <TouchableOpacity
              className="mr-2 rounded-full p-2 active:opacity-70"
              onPress={() => setCurrentStep('goals')}>
              <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <ProgressIndicator value={60} className="w-11/12" indicatorClassName="bg-gray-800" />
          </View>
          <Text className="mb-1 font-['Inter'] text-2xl font-light text-gray-600">
            What do you want to achieve?
          </Text>
          <Text className="mb-4 font-['Inter'] text-sm font-normal text-gray-600">
            What are the specific goals you want to achieve in the next five years? Be as detailed
            as possible.
          </Text>
          <View className="flex-1">
            <CardSelectionGroup cards={visionStatements} />
          </View>
          <View className="flex-row justify-between pb-8">
            <Entypo
              name="chevron-with-circle-left"
              size={48}
              color="black"
              onPress={() => setCurrentStep('goals')}
            />
            <TouchableOpacity
              className="rounded-full bg-gray-600 px-6 py-3"
              onPress={() => setCurrentStep('complete')}>
              <Text className="text-center font-['Inter'] font-semibold text-white">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className="mx-4 h-full">
          <View className="flex-1">
            <Image source={require('../assets/step4.png')} className="mb-2 h-3/5 w-full" />
            <Text className="mb-2 font-['Inter'] text-2xl font-light text-gray-600">
              Congratulations on{'\n'}Crafting Your Vision!
            </Text>
            <Text className="mb-8 font-['Inter'] text-sm text-gray-600">
              You've taken a powerful step toward becoming your best self. Now, let's define the
              areas of your life you want to focus on to make this vision a reality.
            </Text>
            <TouchableOpacity
              className="mb-4 w-full rounded-full bg-gray-600 py-3"
              onPress={() => router.push('/(tabs)/templates')}>
              <Text className="text-center font-['Inter'] font-semibold text-white">
                Step 2: Action
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/templates')}>
              <Text className="text-center font-['Inter'] text-gray-600">I'll Do This Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
