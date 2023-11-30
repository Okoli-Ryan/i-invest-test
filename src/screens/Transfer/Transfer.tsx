import React from "react";
import { ScrollView, Text, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { STYLES } from "../../core/Constants";
import { RootStackParamList } from "../../navigators/RootNavigator";
import AllContacts from "./components/AllContacts";
import Recent from "./components/Recent";
import TransferButton from "./components/TransferButton";
import useTransfer from "./useTransfer";

type TransferScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Transfer"
>;

export type TransferNavigationProps = {
  navigation: TransferScreenNavigationProp;
};

export default function Transfer({ navigation }: TransferNavigationProps) {
  const { navigateToReceipt } = useTransfer({ navigation });

  return (
    <ScrollView style={{ backgroundColor: "#F9F9FB" }}>
      <Recent navigateToReceipt={navigateToReceipt} />
      <AllContacts />
    </ScrollView>
  );
}
