import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { STYLES } from "../../../../core/Constants";
import { TransferOptionType } from "../TransferHeader/TransferHeader";
import { styles } from "./TransferButton.styles";

export default function TransferButton({ icon, title }: TransferOptionType) {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.Container}>
      <View style={styles.ButtonContainer}>{icon}</View>
      <Text style={[STYLES.text_bold, STYLES.text_white, STYLES.text_sm]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
