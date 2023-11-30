import { StyleSheet } from "react-native";

import { COLORS, STYLES } from "../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.primary,
    height: "100%",
    paddingTop: 48,
    ...STYLES.boxPadding,
  },
  ConfettiContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
