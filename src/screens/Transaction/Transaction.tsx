import React from "react";
import { ScrollView, Text, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Graph from "../../assets/images/Graph.svg";
import { Header } from "../../components";
import MoneyFlow from "../../components/MoneyFlow";
import { STYLES } from "../../core/Constants";
import { RootStackParamList } from "../../navigators/RootNavigator";
import TopCategory from "./components/TopCategory";
import TopTransactions from "./components/TopTransactions";
import { styles } from "./Transaction.styles";
import useTransaction from "./useTransaction";

type TransactionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type TransactionNavigationProps = {
  navigation: TransactionScreenNavigationProp;
};

export default function Transaction({
  navigation,
}: TransactionNavigationProps) {
  useTransaction({ navigation });

  return (
    <ScrollView style={{ backgroundColor: "#F9F9FB" }}>
      <Text style={styles.Balance}>Your balance is $2,639</Text>
      <Text style={styles.BalanceDescription}>
        Last month, you spent $2,719
      </Text>
      <View style={styles.GraphContainer}>
        <Graph height={175} width={"100%"} />
      </View>
      <View style={[STYLES.boxPadding]}>
        <View style={{ marginTop: -100 }}>
          <MoneyFlow invert />
          <TopTransactions />
          <TopCategory />
        </View>
      </View>
    </ScrollView>
  );
}
