import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { STYLES } from "../../../../../../core/Constants";
import { RecommendationType } from "../../Recommendations";
import { styles } from "./RecommendationItem.styles";

export default function RecommendationItem({
  count,
  description,
  title,
}: RecommendationType) {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.CountContainer}>
        <Text style={[STYLES.text_regular, STYLES.text_white]}>+{count}</Text>
      </View>
      <View style={styles.InnerContainer}>
        <Text
          style={[STYLES.text_lighterGray, STYLES.text_bold, STYLES.text_base]}
        >
          {title}
        </Text>
        <Text style={styles.Description}>{description}</Text>
        <Text style={styles.Details}>More Details</Text>
      </View>
    </TouchableOpacity>
  );
}
