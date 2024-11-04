import { StyleSheet, Text, View } from 'react-native';

export default function EditScreenInfo({ path }: { path: string }) {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View testID="edit-screen-info" style={styles.getStartedContainer}>
      <Text testID="title-text" style={styles.getStartedText}>
        {title}
      </Text>
      <View
        testID="path-container"
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text testID="path-text">{path}</Text>
      </View>
      <Text testID="description-text" style={styles.getStartedText}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
});
