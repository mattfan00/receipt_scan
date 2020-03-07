import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="md-school"
        label="New York University"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/school/new-york-university/')}
      />

      <OptionButton
        icon="md-school"
        label="Columbia University"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/school/columbia-university/')}
      />

      <OptionButton
        icon="md-school"
        label="Harvard University"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/school/harvard-university/')}
      />

      <OptionButton
        icon="md-school"
        label="Cornell University"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/school/cornell-university/')}
      />

      <OptionButton
        icon="md-school"
        label="Princeton University"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/school/princeton-university/')}
      />

      <OptionButton
        icon="ios-person"
        label="Dude it's obama"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/in/barackobama/')}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
