import { StyleSheet } from 'react-native';

import { COLORS, STYLES } from '../../../../../../core/Constants';

export const styles = StyleSheet.create({
  OuterContainer: {
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 0.5,
    paddingBottom: 24,
  },
  Container: {
    ...STYLES.row,
    alignItems: "center",
  },
  Percentage: {
    ...STYLES.text_bold,
    ...STYLES.text_lg,
    ...STYLES.text_dark,
  },
  Completed: {
    ...STYLES.text_regular,
    ...STYLES.text_sm,
    ...STYLES.text_dark,
  },
  ProgressBar: {
    width: "100%",
    backgroundColor: "#1C193933",
    borderRadius: 5,
    height: 10,
    marginTop: 14,
  },
  InnerProgressBar: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: "70%",
  },
});
