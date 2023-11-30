import { StyleSheet } from "react-native";

import { COLORS, STYLES } from "../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F9F9FB",
  },
  PurpleBox: {
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    height: 360,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 36,
  },
  ConfettiContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  FinanceScore: {
    ...STYLES.text_light,
    ...STYLES.text_bold,
    ...STYLES.text_xl,
  },
});
