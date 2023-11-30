import { StyleSheet } from "react-native";

import { COLORS } from "../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    position: "relative",
    paddingHorizontal: 24,
  },
  Dash: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E4EB",
    borderStyle: "dashed",
  },
  Circle: {
    position: "absolute",
    width: 32,
    height: 32,
    borderRadius: 16,
    top: -16,
  },
  LeftCircle: {
    left: -16,
    backgroundColor: COLORS.primary,
  },
  RightCircle: {
    right: -16,
    backgroundColor: COLORS.primary,
  },
});
