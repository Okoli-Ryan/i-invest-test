import { StyleSheet } from 'react-native';

import { COLORS, STYLES } from '../../../../../core/Constants';

export const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#EFEFEF",
  },
  IconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    ...STYLES.text_sm,
    ...STYLES.text_regular,
    textAlign: "center",
    marginTop: 16
  },
});
