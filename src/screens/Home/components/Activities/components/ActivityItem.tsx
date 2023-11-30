import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./ActivityItem.styles";

export interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
}

export default function ActivityItem({
  icon,
  title,
  onPress = () => {},
}: ActivityItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <View style={styles.IconContainer}>{icon}</View>
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
}
