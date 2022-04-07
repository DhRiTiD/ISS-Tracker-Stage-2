import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MeteorsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Meteors Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//chipmunk
