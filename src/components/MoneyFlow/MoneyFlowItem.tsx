import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { STYLES } from "../../core/Constants";
import { formatCurrency } from "../../core/Utils";

const MONEY_FLOW_COLOR = {
  Spent: "#FF5141",
  Earned: "#967AF3",
};

export interface MoneyFlowItemProps {
  amount: number;
  type: "Earned" | "Spent";
}

export default function MoneyFlowItem({ amount, type }: MoneyFlowItemProps) {
  return (
    <View style={styles.Container}>
      <View
        style={[{ backgroundColor: MONEY_FLOW_COLOR[type] }, styles.Circle]}
      />
      <View>
        <Text style={[STYLES.text_dark, STYLES.text_regular]}>{type}</Text>
        <Text style={[STYLES.text_bold, STYLES.text_dark, STYLES.text_lg]}>
          {formatCurrency(amount)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    gap: 8,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    bottom: 10,
    position: "relative",
  },
});
