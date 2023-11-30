import React from "react";
import { Image, Text, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";

import { COLORS } from "../../../../../../core/Constants";
import { formatCurrency } from "../../../../../../core/Utils";
import { TopCategoryType } from "../../TopCategory";
import { styles } from "./TopCategoryItem.style";

export default function TopCategoryItem({
  amount,
  image,
  title,
  progress,
}: TopCategoryType) {
  return (
    <View style={styles.Container}>
      <View style={styles.InnerContainer}>
        <CircularProgress
          fill={progress}
          width={4}
          size={80}
          tintColor={COLORS.primary}
          backgroundColor="#E6EAEE"
          arcSweepAngle={240}
          rotation={240}
          lineCap="round"
        >
          {(_) => <>{image}</>}
        </CircularProgress>
        <Text style={styles.Title}>{title}</Text>
        <Text style={styles.Amount}>{formatCurrency(amount)}</Text>
      </View>
      <Text style={styles.Track}>on track</Text>
    </View>
  );
}
