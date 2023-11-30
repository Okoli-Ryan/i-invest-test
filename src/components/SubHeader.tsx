//import liraries
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { STYLES } from '../core/Constants';

interface SubHeaderProps {
  title: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function SubHeader({ title, children, style }: SubHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={{fontFamily: "DM_Sans_Bold", ...STYLES.text_md, ...STYLES.text_dark}}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
