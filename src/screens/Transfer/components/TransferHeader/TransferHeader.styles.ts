import { StyleSheet } from "react-native";

import { COLORS, STYLES } from "../../../../core/Constants";

export const styles = StyleSheet.create({
  PurpleBox: {
    ...STYLES.boxPadding,
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
