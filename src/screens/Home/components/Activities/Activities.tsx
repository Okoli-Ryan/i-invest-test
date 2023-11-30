import React from "react";
import { View } from "react-native";

import CreditCardIcon from "../../../../assets/icons/credit-card.svg";
import GrowthIcon from "../../../../assets/icons/growth.svg";
import SendIcon from "../../../../assets/icons/send.svg";
import { SubHeader } from "../../../../components";
import { styles } from "./Activities.styles";
import ActivityItem, { ActivityItemProps } from "./components/ActivityItem";

interface ActivitiesProps {
  navigateToTransfer: () => void;
  navigateToTransaction: () => void;
  navigateToFinance: () => void;
}

export default function Activities({
  navigateToTransfer,
  navigateToTransaction,
  navigateToFinance,
}: ActivitiesProps) {
  return (
    <SubHeader title="Activities" style={{ marginTop: 36 }}>
      <View style={styles.ActivityContainer}>
        <ActivityItem
          onPress={navigateToTransfer}
          title="Transfer"
          icon={<SendIcon width={28} height={24} />}
        />
        <ActivityItem
          title="My Card"
          onPress={navigateToFinance}
          icon={<CreditCardIcon width={28} height={24} />}
        />
        <ActivityItem
          onPress={navigateToTransaction}
          title="Insight"
          icon={<GrowthIcon width={28} height={24} />}
        />
      </View>
    </SubHeader>
  );
}
