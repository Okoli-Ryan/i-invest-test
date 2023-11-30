import { StyleSheet } from "react-native";

import { STYLES } from "../../core/Constants";

export const styles = StyleSheet.create({
  Balance: {
    textAlign: "center",
    marginTop: 36,
    ...STYLES.text_dark,
    ...STYLES.text_lg,
    ...STYLES.text_bold,
  },
  BalanceDescription: {
    textAlign: "center",
    marginTop: 10,
    ...STYLES.text_regular,
    ...STYLES.text_dark,
  },
  GraphContainer: {
    marginTop: 60,
  },
});
