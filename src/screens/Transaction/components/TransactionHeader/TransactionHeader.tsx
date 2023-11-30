import React from "react";
import { Text } from "react-native";

import { Header } from "../../../../components";
import { STYLES } from "../../../../core/Constants";

export default function TransactionHeader() {
  return (
    <Header
      Right={
        <Text style={[STYLES.text_primary, STYLES.text_bold, STYLES.text_base]}>
          Set Budget
        </Text>
      }
    />
  );
}
