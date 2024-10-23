import * as React from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text } from '~/components/nativewindui/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRouter } from 'expo-router';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';

const { width, height } = Dimensions.get('window');

export default function Screen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(0);
  const bottomSheetModalRef = useSheetRef();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  React.useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const steps = [
    {
      title: '3 Steps to a better you',
      content: (
        <>
          <Text className="mb-4 font-['Inter'] text-5xl font-light text-gray-600">
            3 Steps to a better you
          </Text>
          <Text className="font-['Inter'] text-2xl font-normal text-gray-600">Step 1: Vision</Text>
          <Text className="font-['Inter'] text-2xl font-normal text-gray-600">Step 2: Action</Text>
          <Text className="font-['Inter'] text-2xl font-normal text-gray-600">
            Step 3: Progress
          </Text>
        </>
      ),
      snapPoint: '45%',
    },
    {
      title: 'Step 1: Vision',
      content: (
        <>
          <Text className="mb-2 font-['Inter'] text-2xl font-light text-gray-600">
            Step 1: Vision
          </Text>
          <Text className="font-['Inter'] text-sm font-normal text-gray-600">
            Picture the person you aspire to be. Shape your future by defining your aspirational
            self.
          </Text>
        </>
      ),
      snapPoint: '30%',
    },
    {
      title: 'Step 2: Action',
      content: (
        <>
          <Text className="mb-2 font-['Inter'] text-2xl font-light text-gray-600">
            Step 2: Action
          </Text>
          <Text className="font-['Inter'] text-sm font-normal text-gray-600">
            Identify the steps that will bring your vision to life. Break your goals into clear,
            actionable steps.
          </Text>
        </>
      ),
      snapPoint: '30%',
    },
    {
      title: 'Step 3: Progress',
      content: (
        <>
          <Text className="mb-2 font-['Inter'] text-2xl font-light text-gray-600">
            Step 3: Progress
          </Text>
          <Text className="font-['Inter'] text-sm font-normal text-gray-600">
            Stay accountable and monitor your journey. Celebrate your milestones as you grow closer
            to your best self.
          </Text>
        </>
      ),
      snapPoint: '30%',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    // Skip to the last step
    setCurrentStep(steps.length - 1);
  };

  const handleBegin = () => {
    bottomSheetModalRef.current?.dismiss();

    router.push('/(tabs)/templates');
  };

  const handleLater = () => {
    bottomSheetModalRef.current?.dismiss();

    router.push('/(tabs)/templates');
  };

  const handleSheetDismiss = React.useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <View className="flex-1">
        {currentStep === 0 && (
          <Image
            source={require('../assets/step1.png')}
            className="absolute h-full w-full"
            style={{ width, height }}
          />
        )}
        {currentStep === 1 && (
          <Image
            source={require('../assets/step2.png')}
            className="absolute h-full w-full"
            style={{ width, height }}
          />
        )}
        {currentStep === 2 && (
          <Image
            source={require('../assets/step3.png')}
            className="absolute h-full w-full"
            style={{ width, height }}
          />
        )}
        {currentStep === 3 && (
          <Image
            source={require('../assets/step4.png')}
            className="absolute h-full w-full"
            style={{ width, height }}
          />
        )}
        <SafeAreaView className="flex-1">
          {/* You can add any content that should be on top of the image here */}
        </SafeAreaView>
      </View>
      <Sheet
        ref={bottomSheetModalRef}
        snapPoints={[steps[currentStep].snapPoint]}
        onDismiss={handleSheetDismiss}>
        <View className="p-4">
          {steps[currentStep].content}
          <View className="mt-8 flex-row justify-between">
            {currentStep < steps.length - 1 ? (
              <>
                <TouchableOpacity onPress={handleSkip}>
                  <Text className="text-gray-500">Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleNext}
                  className="rounded-full bg-gray-600 px-6 py-3">
                  <Text className="text-center font-['Inter'] font-semibold text-white">Next</Text>
                </TouchableOpacity>
              </>
            ) : (
              <View className="flex-1 items-center justify-center">
                <View className="w-full flex-col space-y-4">
                  <TouchableOpacity
                    onPress={handleBegin}
                    className="mb-2 rounded-full bg-black px-4 py-2">
                    <Text className="text-center text-white">Begin Your First Step: Vision</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLater}>
                    <Text className="text-center text-gray-500">I'll Do This Later</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Sheet>
    </>
  );
}
