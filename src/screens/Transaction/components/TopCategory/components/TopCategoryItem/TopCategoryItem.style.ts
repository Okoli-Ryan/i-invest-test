import { StyleSheet } from "react-native";

import { STYLES } from "../../../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#FFF",
    height: 200,
    borderRadius: 10,
  },
  InnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 32,
    height: 32,
  },
  Title: {
    textAlign: "center",
    marginTop: 10,
    ...STYLES.text_dark,
    ...STYLES.text_bold,
  },
  Amount: {
    ...STYLES.text_dark,
    ...STYLES.text_regular,
    textAlign: "center",
    marginTop: 4,
  },
  Track: {
    ...STYLES.text_dark,
    ...STYLES.text_sm,
    ...STYLES.text_regular,
    color: "#7D8CBA",
    justifyContent: "flex-end",
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#F9F9FB",
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
});
