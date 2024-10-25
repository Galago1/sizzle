// Learn more https://docs.expo.io/guides/customizing-metro
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

module.exports = withStorybook(withNativeWind(config, { input: './global.css', inlineRem: 16 }));
