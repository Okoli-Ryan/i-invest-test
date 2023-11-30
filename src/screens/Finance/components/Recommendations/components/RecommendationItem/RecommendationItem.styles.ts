import { StyleSheet } from "react-native";

import { COLORS, STYLES } from "../../../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    gap: 16,
    paddingVertical: 32,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  CountContainer: {
    ...STYLES.shadow,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: COLORS.primary,
  },
  InnerContainer: {
    flex: 1,
  },
  Description: {
    ...STYLES.text_dark,
    ...STYLES.text_bold,
    ...STYLES.text_sm,
    marginBottom: 20,
    marginTop: 12,
  },
  Details: {
    ...STYLES.text_primary,
    ...STYLES.text_bold,
    // marginLeft: 36,
  },
});
