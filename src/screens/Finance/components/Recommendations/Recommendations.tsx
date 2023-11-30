import React from "react";
import { View } from "react-native";

import { SubHeader } from "../../../../components";
import { RecommendationItem } from "./components/RecommendationItem";
import { styles } from "./Recommendations.styles";

export default function Recommendations() {
  return (
    <SubHeader title="Recommendation" style={{ marginTop: 45 }}>
      <View style={styles.Container}>
        {RECOMMENDATIONS.map((item, index) => (
          <RecommendationItem key={index} {...item} />
        ))}
      </View>
    </SubHeader>
  );
}

export type RecommendationType = {
  count: number;
  title: string;
  description: string;
};

export const RECOMMENDATIONS: RecommendationType[] = [
  {
    count: 17,
    title: "Spending",
    description:
      "You spent $468 on food. That’s 50% higher than the average of our users.",
  },
  {
    count: 8,
    title: "Credit",
    description:
      "You were late to pay last month’s card bills. Lets try to be on time this month.",
  },
];
