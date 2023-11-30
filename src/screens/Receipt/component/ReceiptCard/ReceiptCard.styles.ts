import { StyleSheet } from "react-native";

import { COLORS, STYLES } from "../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    width: "100%",
    marginBottom: 42,
    borderRadius: 12,
  },
  BoxPadding: {
    padding: 24,
  },
  IconContainer: {
    backgroundColor: "#FBD133",
    alignSelf: "center",
    padding: 24,
    borderRadius: 25,
    marginBottom: 14,
  },
  RecipientContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginBottom: 45,
  },
  Reference: {
    marginBottom: 42,
  },
  Transaction: {
    ...STYLES.row,
    alignItems: "center",
    marginBottom: 54,
  },
  ButtonContainer: {
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  ShareButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
  },
  ShareButtonText: {
    ...STYLES.text_white,
    ...STYLES.text_base,
    ...STYLES.text_bold,
  },
  Title: {
    ...STYLES.text_bold,
    ...STYLES.text_lighterGray,
  },
  Value: {
    ...STYLES.text_bold,
    ...STYLES.text_base,
    ...STYLES.text_dark,
  },
});
