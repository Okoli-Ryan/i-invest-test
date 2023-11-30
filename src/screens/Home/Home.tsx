//import liraries
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import MoneyFlow from "../../components/MoneyFlow/MoneyFlow";
// import Text from '../../components';
import { COLORS, FONTS, STYLES } from "../../core/Constants";
import { RootStackParamList } from "../../navigators/RootNavigator";
import Activities from "./components/Activities";
import News from "./components/News";
import Verification from "./components/Verification/Verification";
import { styles } from "./Home.styles";
import useHome from "./useHome";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type HomeNavigationProps = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: HomeNavigationProps) {
  const { navigateToTransfer, navigateToTransactions, navigateToFinance } =
    useHome({ navigation });

  return (
    <ScrollView style={styles.Container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.PrimaryBackground} />
      <View style={styles.innerContainer}>
        <View style={[STYLES.row, { alignItems: "flex-start" }]}>
          <Text
            style={[STYLES.text_base, STYLES.text_light, STYLES.text_regular]}
          >
            Hi Philip 👋🏾
          </Text>
          <View style={styles.ProfilePic}></View>
        </View>
        <Text style={[STYLES.text_lg, STYLES.text_white, STYLES.text_bold]}>
          $7,425
        </Text>
        <Text
          style={[STYLES.text_base, STYLES.text_light, STYLES.text_regular]}
        >
          Available balance
        </Text>

        <MoneyFlow>
          <Text style={styles.Description}>
            You spent $2,732 on dining out this month. This is 25% more than
            last month.
          </Text>
          <Text style={styles.More}>Tell me more</Text>
        </MoneyFlow>

        <Activities
          navigateToTransfer={navigateToTransfer}
          navigateToTransaction={navigateToTransactions}
          navigateToFinance={navigateToFinance}
        />
        <Verification />
        <News />
      </View>
    </ScrollView>
  );
}
