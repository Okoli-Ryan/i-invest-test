import React from "react";
import { Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "../components";
import { STYLES } from "../core/Constants";
import { ROUTES } from "../core/Routes";
import Finance from "../screens/Finance";
import Home from "../screens/Home";
import Receipt from "../screens/Receipt";
import Transaction from "../screens/Transaction";
import { TransactionHeader } from "../screens/Transaction/components/TransactionHeader";
import Transfer from "../screens/Transfer";

export type RootStackParamList = Record<string, any>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

export default function RootNavigator() {
  return (
    <Navigator screenOptions={{ header: () => null }}>
      <Screen name={ROUTES.main.Home.name} component={Home} />
      <Screen name={ROUTES.main.Transaction.name} component={Transaction} />
      <Screen name={ROUTES.main.Transfer.name} component={Transfer} />
      <Screen name={ROUTES.main.Finance.name} component={Finance} />
      <Screen
        name={ROUTES.main.Receipt.name}
        component={Receipt as any}
        // options={{ header: TransactionHeader }}
      />
    </Navigator>
  );
}
