import { StyleSheet } from 'react-native';

import { STYLES } from '../../../../../../../../core/Constants';

export const styles = StyleSheet.create({
  Container: {
    overflow: "hidden",
  },
  IconContainer: {
    width: 36,
  },
  InnerContainer: {
    paddingVertical: 24,
  },
  TitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  Title: {
    ...STYLES.text_dark,
    ...STYLES.text_bold,
    ...STYLES.text_base,
  },
  Description: {
    ...STYLES.text_dark,
    ...STYLES.text_regular,
    marginBottom: 20,
    marginTop: 14,
    marginLeft: 36,
  },
  Continue: {
    ...STYLES.text_primary,
    ...STYLES.text_bold,
    marginLeft: 36,
  },
  BottomBorder: {
    width: "100%",
    height: 1,
    backgroundColor: "#D2D1D7",
    marginLeft: 36,
  },
});
