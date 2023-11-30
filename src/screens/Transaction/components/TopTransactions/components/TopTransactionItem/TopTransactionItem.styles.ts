import { StyleSheet } from "react-native";

import { STYLES } from "../../../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
    alignItems: "center",
  },
  InnerContainer: {
    gap: 24,
    flexDirection: "row",
  },
  TransactionHeader: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  HeaderTextContainer: {
    gap: 6,
  },
  ImageContainer: {
    ...STYLES.shadow,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "white",
  },
  Image: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },
  Amount: {
    ...STYLES.text_bold,
    ...STYLES.text_md,
    ...STYLES.text_dark,
  },
});
