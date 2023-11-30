import { StyleSheet } from "react-native";

import { STYLES } from "../../../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    gap: 16,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    backgroundColor: "white",
  },
  Name: {
    ...STYLES.text_dark,
    ...STYLES.text_bold,
    ...STYLES.text_center,
    ...STYLES.text_base,
  },
  Number: {
    ...STYLES.text_lighterGray,
    ...STYLES.text_bold,
    ...STYLES.text_center,
    ...STYLES.text_sm,
  },
});
