import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface CustomButton {
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export default function Button({ style, textStyle, children }: CustomButton) {
  return (
    <TouchableOpacity style={style}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
