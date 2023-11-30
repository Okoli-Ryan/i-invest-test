import React from "react";
import { View } from "react-native";

import { styles } from "./Divider.styles";

export default function Divider() {
  return (
    <View style={styles.Container}>
      <View style={[styles.LeftCircle, styles.Circle]}></View>
      <View style={styles.Dash}></View>
      <View style={[styles.RightCircle, styles.Circle]}></View>
    </View>
  );
}
