import React from "react";
import { Text, View } from "react-native";
import AntD from "react-native-vector-icons/AntDesign";
import FA from "react-native-vector-icons/FontAwesome";
import FA6 from "react-native-vector-icons/FontAwesome6";

import { STYLES } from "../../../../core/Constants";
import TransferButton from "../TransferButton";
import { styles } from "./TransferHeader.styles";

export default function TransferHeader() {
  return (
    <View style={styles.PurpleBox}>
      <Text
        style={[
          STYLES.text_center,
          STYLES.text_white,
          STYLES.text_bold,
          STYLES.text_lg,
        ]}
      >
        Transfer
      </Text>
      <View style={[STYLES.row, { marginTop: 24 }]}>
        {TransferOptions.map((option, index) => (
          <TransferButton {...option} key={index} />
        ))}
      </View>
    </View>
  );
}

export type TransferOptionType = {
  icon: any;
  title: string;
};

const TransferOptions: TransferOptionType[] = [
  {
    icon: <FA6 name="user" size={18} color="white" />,
    title: "Mobile",
  },

  {
    icon: <FA name="bank" size={18} color="white" />,
    title: "Bank",
  },
  {
    icon: <FA6 name="wifi" size={18} color="white" />,
    title: "Online",
  },
  {
    icon: <AntD name="qrcode" size={18} color="white" />,
    title: "QR code",
  },
];
