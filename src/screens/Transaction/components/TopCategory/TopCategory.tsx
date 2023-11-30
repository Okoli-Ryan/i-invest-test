import React from "react";
import { View } from "react-native";

import LunchImage from "../../../../assets/icons/hamburger.svg";
import MedicineImage from "../../../../assets/icons/medicine.svg";
import { SubHeader } from "../../../../components";
import { TopCategoryItem } from "./components/TopCategoryItem";
import { styles } from "./TopCategory.styles";

export default function TopCategory() {
  return (
    <SubHeader title="Top Category" style={styles.Container}>
      <View style={styles.InnerContainer}>
        {TOP_CATEGORIES.map((item, index) => (
          <TopCategoryItem {...item} key={index} />
        ))}
      </View>
    </SubHeader>
  );
}

export type TopCategoryType = (typeof TOP_CATEGORIES)[number];

export const TOP_CATEGORIES = [
  {
    title: "Lunch & Dinner",
    amount: 450,
    image: <LunchImage width={32} height={32} />,
    progress: 60,
  },
  {
    title: "Medical Allowances",
    amount: 330,
    image: <MedicineImage width={32} height={32} />,
    progress: 65,
  },
];
