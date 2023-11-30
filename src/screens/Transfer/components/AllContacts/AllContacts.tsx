import React from "react";
import { FlatList, View } from "react-native";

import { SubHeader } from "../../../../components";
import SearchInput from "../../../../components/Input";
import { STYLES } from "../../../../core/Constants";
import { CONTACTS } from "../../../../core/DummyData";
import ContactBox from "./components/ContactBox/ContactBox";

export default function AllContacts() {
  return (
    <SubHeader
      title="All contacts"
      style={{ marginTop: 24, backgroundColor: "white", ...STYLES.boxPadding }}
    >
      <FlatList
        ListHeaderComponent={<SearchInput />}
        data={CONTACTS}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ContactBox {...item} />}
      />
    </SubHeader>
  );
}
