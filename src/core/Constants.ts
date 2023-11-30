import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: "#7165E3",
  lightPrimary: "#7C6EFF",
  lightGray: "#D2D1D7",
  lighterGray: "#9EA6BE",
};

export const FONTS = {
  regular: { fontFamily: "DM_Sans_Regular" },
  bold: { fontFamily: "DM_Sans_Bold" },
};

export const STYLES = StyleSheet.create({
  //   LAYOUTS
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  flex: {
    flex: 1,
  },
  boxPadding: {
    padding: 24,
  },
  text_center: {
    textAlign: "center",
  },

  //   FONT SIZES
  text_sm: {
    fontSize: 12,
  },
  text_base: {
    fontSize: 16,
  },
  text_md: {
    fontSize: 18,
  },
  text_lg: {
    fontSize: 20,
  },
  text_xl: {
    fontSize: 24,
  },

  //   TEXT COLORS
  text_light: {
    color: "#FFFFFFCC",
  },
  text_white: {
    color: "#FFFFFF",
  },
  text_dark: {
    color: "#1C1939",
  },
  text_primary: {
    color: COLORS.primary,
  },
  text_lighterGray: {
    color: COLORS.lighterGray,
  },

  //   FONT WEIGHT
  text_bold: {
    fontFamily: "DM_Sans_Bold",
  },
  text_regular: {
    fontFamily: "DM_Sans_Regular",
  },

  //   MISC
  shadow: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    justifyContent: "center",
  },
});
