// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { generate } = require('@storybook/react-native/scripts/generate');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

module.exports = withNativeWind(config, { input: './global.css', inlineRem: 16 });
