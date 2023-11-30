import { StyleSheet } from 'react-native';

import { COLORS, FONTS, STYLES } from '../../core/Constants';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
  },
  innerContainer: {
    padding: 24,
  },
  ProfilePic: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
  },
  PrimaryBackground: {
    backgroundColor: COLORS.primary,
    height: 275,
    width: "100%",
    position: "absolute",
    top: 0,
  },
  Description: {
    marginTop: 36,
    ...STYLES.text_regular,
  },
  More: {
    color: COLORS.primary,
    marginTop: 8,
    textDecorationLine: "underline",
    ...STYLES.text_bold,
  },
});
