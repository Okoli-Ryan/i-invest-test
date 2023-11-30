import React from "react";
import { FlatList, Text, View } from "react-native";

import { STYLES } from "../../../../core/Constants";
import { CONTACTS } from "../../../../core/DummyData";
import { RecentContact } from "./components/RecentContact";
import { styles } from "./Recent.styles";

interface RecentProps {
  navigateToReceipt: (e: number) => void;
}

export default function Recent({ navigateToReceipt }: RecentProps) {
  return (
    <View style={styles.Container}>
      <View style={[STYLES.boxPadding, { paddingVertical: 0 }]}>
        <Text
          style={{
            fontFamily: "DM_Sans_Bold",
            ...STYLES.text_md,
            ...STYLES.text_dark,
          }}
        >
          Recent
        </Text>
      </View>
      <FlatList
        horizontal
        contentContainerStyle={styles.ListContainer}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        data={CONTACTS}
        renderItem={({ item, index }) => (
          <RecentContact onPress={() => navigateToReceipt(index)} {...item} />
        )}
      />
    </View>
  );
}
