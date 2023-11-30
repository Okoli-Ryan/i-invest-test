import { StyleSheet } from "react-native";

import { STYLES } from "../../../../core/Constants";

export const styles = StyleSheet.create({
  Container: {
    marginTop: 40,
  },
  InnerContainer: {
    borderWidth: 0.5,
    borderColor: "#EFEFEF",
    borderRadius: 10,
  },
  Image: {
    ...StyleSheet.absoluteFillObject,
  },
  ImageContainer: {
    position: "relative",
    width: "100%",
  },
  TextContainer: {
    paddingBottom: 26,
    paddingHorizontal: 21,
    gap: 12,
  },
  InviteNow: {
    ...STYLES.text_primary,
    ...STYLES.text_bold,
    ...STYLES.text_base,
    marginTop: 18,
  },
});
