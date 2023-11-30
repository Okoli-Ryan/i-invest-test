import { StyleSheet } from "react-native";

import { STYLES } from "../../../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
    alignItems: "center",
    ...STYLES.row,
  },
  InnerContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  ContactTextContainer: {
    gap: 4,
  },
  button: {
    ...STYLES.button,
    backgroundColor: "#9EA6BE",
    paddingHorizontal: 24,
  },
  buttonText: {
    ...STYLES.text_light,
    ...STYLES.text_sm,
    ...STYLES.text_regular,
  },
});
