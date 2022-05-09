import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface Props {}
export const HomeScreen = ({}: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
