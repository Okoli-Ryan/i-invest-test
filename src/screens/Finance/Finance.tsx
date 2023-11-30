import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";

import Confetti from "../../assets/images/Ilustration.svg";
import { COLORS, STYLES } from "../../core/Constants";
import { RecommendationItem } from "./components/Recommendations/components/RecommendationItem";
import Recommendations from "./components/Recommendations/Recommendations";
import { styles } from "./Finance.styles";

export default function Finance() {
  return (
    <ScrollView style={styles.Container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.PurpleBox}>
        <View style={styles.ConfettiContainer}>
          <Confetti width="80%" height="100%" />
        </View>
        <Text style={styles.FinanceScore}>Finance Score</Text>
        <View>
          <Text
            style={[
              STYLES.text_white,
              STYLES.text_bold,
              STYLES.text_xl,
              STYLES.text_center,
            ]}
          >
            It can be better!
          </Text>
          <Text
            style={[
              STYLES.text_white,
              STYLES.text_regular,
              STYLES.text_base,
              STYLES.text_center,
            ]}
          >
            Below are some recommendations
          </Text>
        </View>
      </View>
      <View style={[STYLES.boxPadding]}>
        <Recommendations />
      </View>
    </ScrollView>
  );
}
