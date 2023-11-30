import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./VerificationItem.styles";

export interface VerificationItemProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
}

export default function VerificationItem({
  icon,
  title,
  description,
  activeIndex,
  index,
  selectActiveIndex,
}: VerificationItemProps & {
  activeIndex: number;
  index: number;
  selectActiveIndex: (e: number) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => selectActiveIndex(index)}
      style={styles.Container}
    >
      <View style={styles.InnerContainer}>
        <View style={styles.TitleContainer}>
          <View style={styles.IconContainer}>{icon}</View>
          <Text style={styles.Title}>{title}</Text>
        </View>
        {activeIndex === index && (
          <Text style={styles.Description}>{description}</Text>
        )}
        {activeIndex === index && <Text style={styles.Continue}>Continue</Text>}
      </View>
      <View style={styles.BottomBorder} />
    </TouchableOpacity>
  );
}
