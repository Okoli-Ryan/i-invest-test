import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ScreenContainerProps } from "react-native-screens";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Confetti from "../../assets/images/Confetti-2.svg";
import { STYLES } from "../../core/Constants";
import { CONTACTS } from "../../core/DummyData";
import { RootStackParamList } from "../../navigators/RootNavigator";
import ReceiptCard from "./component/ReceiptCard";
import { styles } from "./Receipt.styles";
import useReceipt from "./useReceipt";

type ReceiptScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Receipt"
>;

type ReceiptScreenRouteProp = RouteProp<RootStackParamList, "Receipt">;

export type ReceiptProps = {
  //   navigation: ReceiptScreenNavigationProp;
  route: ReceiptScreenRouteProp;
};

export default function Receipt(props: ReceiptProps) {
  const { userId } = useReceipt(props);

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.ConfettiContainer}>
        <Confetti height={90} width="100%" />
      </View>
      <Text
        style={[
          STYLES.text_white,
          STYLES.text_xl,
          STYLES.text_center,
          STYLES.text_bold,
          { marginBottom: 48 },
        ]}
      >
        My Receipt
      </Text>
      <ReceiptCard userDetails={CONTACTS[userId]} />
      <Text
        style={[
          STYLES.text_white,
          STYLES.text_center,
          STYLES.text_bold,
          STYLES.text_base,
          { marginBottom: 96 },
        ]}
      >
        Your transfer will arrive to the recipient within 48 hours
      </Text>
    </ScrollView>
  );
}
