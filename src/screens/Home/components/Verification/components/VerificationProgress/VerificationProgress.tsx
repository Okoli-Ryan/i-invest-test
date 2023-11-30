import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './VerificationProgress.styles';

export default function VerificationProgress() {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text style={styles.Percentage}>70%</Text>
        <Text style={styles.Completed}>7 of 10 completed</Text>
      </View>
      <View style={styles.ProgressBar}>
        <View style={styles.InnerProgressBar} />
      </View>
    </View>
  );
}
