import React from "react";
import { Image, ImageProps, Text, View } from "react-native";

import { STYLES } from "../../../../../../core/Constants";
import { formatCurrency } from "../../../../../../core/Utils";
import { TopTransactionsType } from "../../TopTransactions";
import { styles } from "./TopTransactionItem.styles";

export default function TopTransactionItem({
  amount,
  image,
  name,
  noOfTransactions,
}: TopTransactionsType) {
  return (
    <View style={[STYLES.row, styles.Container]}>
      <View style={styles.TransactionHeader}>
        <View style={styles.ImageContainer}>
          <Image source={image as any} style={styles.Image} />
        </View>
        <View style={styles.HeaderTextContainer}>
          <Text style={[STYLES.text_bold, STYLES.text_base, STYLES.text_dark]}>
            {name}
          </Text>
          <Text style={[STYLES.text_regular, STYLES.text_dark, STYLES.text_sm]}>
            {noOfTransactions} transactions
          </Text>
        </View>
      </View>
      <Text style={styles.Amount}>{formatCurrency(amount)}</Text>
    </View>
  );
}
