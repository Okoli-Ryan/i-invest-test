import { StyleSheet } from "react-native";

import { COLORS } from "../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    gap: 8,
    alignItems: "center",
  },
  ButtonContainer: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: COLORS.lightPrimary,
  },
});
