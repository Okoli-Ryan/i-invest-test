import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { COLORS, STYLES } from "../core/Constants";

export default function SearchInput() {
  return (
    <View style={styles.Container}>
      <View style={styles.Icon}>
        <Feather name="search" size={24} color="#8F96AD" />
      </View>
      <TextInput style={styles.Input} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: "#F9F9FB",
  },
  Icon: {
    position: "absolute",
    top: 18,
    left: 20,
    zIndex: 2,
  },
  Input: {
    width: "100%",
    paddingLeft: 56,
    paddingRight: 16,
    paddingVertical: 16,
    borderRadius: 10,
    ...STYLES.text_bold,
    ...STYLES.text_lighterGray,
  },
});
