import React from "react";
import { Text, View } from "react-native";

import { STYLES } from "../../core/Constants";
import { styles } from "./MoneyFlow.styles";
import MoneyFlowItem, { MoneyFlowItemProps } from "./MoneyFlowItem";

interface MoneyFlowProps {
  children?: React.ReactNode;
  invert?: boolean;
}

export default function MoneyFlow({ children, invert }: MoneyFlowProps) {
  return (
    <View style={styles.WhiteBox}>
      <View
        style={[STYLES.row, { flexDirection: invert ? "row-reverse" : "row" }]}
      >
        <MoneyFlowItem {...MoneyFlowData.Spent} />
        <MoneyFlowItem {...MoneyFlowData.Earned} />
      </View>
      {children}
    </View>
  );
}

const MoneyFlowData: Record<string, MoneyFlowItemProps> = {
  Spent: {
    type: "Spent",
    amount: 1460,
  },
  Earned: {
    type: "Earned",
    amount: 2730,
  },
};
