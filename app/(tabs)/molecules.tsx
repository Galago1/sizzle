import { useActionSheet } from '@expo/react-native-action-sheet';
import * as React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { TopNav } from '~/components/TopNav';
import { Card, CardContent } from '~/components/nativewindui/Card';
import { ContextMenu } from '~/components/nativewindui/ContextMenu';
import {
  createContextItem,
  createContextSubMenu,
} from '~/components/nativewindui/ContextMenu/utils';
import { DatePicker } from '~/components/nativewindui/DatePicker';
import { DropdownMenu } from '~/components/nativewindui/DropdownMenu';
import {
  createDropdownItem,
  createDropdownSubMenu,
} from '~/components/nativewindui/DropdownMenu/utils';
import { Form, FormItem, FormSection } from '~/components/nativewindui/Form';
import { Picker, PickerItem } from '~/components/nativewindui/Picker';
import { SearchInput } from '~/components/nativewindui/SearchInput';
import { SegmentedControl } from '~/components/nativewindui/SegmentedControl';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import { Text } from '~/components/nativewindui/Text';
import { useColorScheme } from '~/lib/useColorScheme';

export default function Screen() {
  const { colors, isDarkColorScheme } = useColorScheme();
  const bottomSheetModalRef = useSheetRef();
  const { showActionSheetWithOptions } = useActionSheet();
  const [date, setDate] = React.useState(new Date());
  const [picker, setPicker] = React.useState('blue');
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <>
      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}>
          <View className="p-4">
            <TopNav title="Molecules">
              <TouchableOpacity className="mr-4">
                <Text className="text-blue-500">Button 1</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-blue-500">Button 2</Text>
              </TouchableOpacity>
            </TopNav>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Action Sheet</Text>
                  <TouchableOpacity
                    className="mt-2 rounded-full bg-gray-600 py-3"
                    onPress={() => {
                      const options = ['Delete', 'Save', 'Cancel'];
                      const destructiveButtonIndex = 0;
                      const cancelButtonIndex = 2;

                      showActionSheetWithOptions(
                        {
                          options,
                          cancelButtonIndex,
                          destructiveButtonIndex,
                          containerStyle: {
                            backgroundColor: isDarkColorScheme ? 'black' : 'white',
                          },
                          textStyle: {
                            color: colors.foreground,
                          },
                        },
                        (selectedIndex) => {
                          switch (selectedIndex) {
                            case 1:
                              // Save
                              break;
                            case destructiveButtonIndex:
                              // Delete
                              break;
                            case cancelButtonIndex:
                            // Canceled
                          }
                        }
                      );
                    }}>
                    <Text className="text-center font-['Inter'] font-semibold text-white">
                      Open action sheet
                    </Text>
                  </TouchableOpacity>
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Bottom Sheet</Text>
                  <TouchableOpacity
                    className="mt-1 mt-2 rounded-full bg-gray-600 py-3"
                    onPress={() => bottomSheetModalRef.current?.present()}>
                    <Text className="text-center font-['Inter'] font-semibold text-white">
                      Open Bottom Sheet
                    </Text>
                  </TouchableOpacity>
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Context Menu</Text>
                  <ContextMenu
                    className="rounded-md"
                    items={[
                      createContextItem({
                        actionKey: 'first',
                        title: 'Item 1',
                      }),
                      createContextSubMenu({ title: 'Submenu 1', iOSItemSize: 'small' }, [
                        createContextItem({
                          actionKey: 'sub-first',
                          title: 'Sub Item 1',
                        }),
                        createContextItem({
                          actionKey: 'sub-second',
                          title: 'Sub Item 2',
                        }),
                      ]),
                    ]}
                    onItemPress={(item) => {
                      console.log('Item Pressed', item);
                    }}>
                    <Pressable>
                      <Text className="text-center">Long Press Me</Text>
                    </Pressable>
                  </ContextMenu>
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Date Picker</Text>
                  <View className="items-center">
                    <DatePicker
                      value={date}
                      mode="datetime"
                      onChange={(ev) => {
                        setDate(new Date(ev.nativeEvent.timestamp));
                      }}
                    />
                  </View>
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Dropdown Menu</Text>
                  <DropdownMenu
                    items={[
                      createDropdownItem({
                        actionKey: 'first',
                        title: 'Item 1',
                      }),
                      createDropdownSubMenu({ title: 'Submenu 1', iOSItemSize: 'small' }, [
                        createDropdownItem({
                          actionKey: 'sub-first',
                          title: 'Sub Item 1',
                        }),
                        createDropdownItem({
                          actionKey: 'sub-second',
                          title: 'Sub Item 2',
                        }),
                      ]),
                    ]}
                    onItemPress={(item) => {
                      console.log('Item Pressed', item);
                    }}>
                    <TouchableOpacity className="mt-2 rounded-full bg-gray-600 py-3">
                      <Text className="text-center font-['Inter'] font-semibold text-white">
                        Open Dropdown
                      </Text>
                    </TouchableOpacity>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="mt-2 shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Form</Text>
                  <Form>
                    <FormSection>
                      <FormItem>
                        <TextInput
                          placeholder="First Name"
                          className="ios:border-0 rounded-lg border border-border px-3 py-2.5 text-lg leading-6 text-foreground"
                        />
                      </FormItem>
                      <FormItem>
                        <TextInput
                          placeholder="Last Name"
                          className="ios:border-0 rounded-lg border border-border px-3 py-2.5 text-lg leading-6 text-foreground"
                        />
                      </FormItem>
                    </FormSection>
                  </Form>
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Picker</Text>
                  <Picker
                    className=""
                    selectedValue={picker}
                    onValueChange={(itemValue) => setPicker(itemValue)}>
                    <PickerItem label="Red" value="red" color="red" />
                    <PickerItem label="Blue" value="blue" color="blue" />
                  </Picker>
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Search Input</Text>
                  <SearchInput />
                </CardContent>
              </Card>
            </View>
            <View className="mt-4">
              <Card rootClassName="shadow-none">
                <CardContent>
                  <Text className="font-['Inter'] font-light">Segmented Control</Text>
                  <View className="mt-2">
                    <SegmentedControl
                      values={['One', 'Two', 'Three', 'Four']}
                      selectedIndex={selectedIndex}
                      onIndexChange={(index) => {
                        setSelectedIndex(index);
                      }}
                    />
                  </View>
                </CardContent>
              </Card>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Sheet ref={bottomSheetModalRef} snapPoints={[200]}>
        <View className="flex-1 items-center justify-center pb-8">
          <Text className="text-foreground">@gorhom/bottom-sheet 🎉</Text>
        </View>
      </Sheet>
    </>
  );
}
