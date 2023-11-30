import React from "react";
import { View } from "react-native";

import Amazon from "../../../../assets/images/amazon.png";
import PizzaHut from "../../../../assets/images/pizzaHut.png";
import Subway from "../../../../assets/images/subway.png";
import { SubHeader } from "../../../../components";
import { TopTransactionItem } from "./components/TopTransactionItem";

export default function TopTransactions() {
  return (
    <SubHeader title="Top Transactions" style={{ marginTop: 36 }}>
      {TOP_TRANSACTIONS.map((item, index) => (
        <TopTransactionItem key={index} {...item} />
      ))}
    </SubHeader>
  );
}

const TOP_TRANSACTIONS = [
  {
    name: "PizzaHut",
    image: PizzaHut,
    noOfTransactions: 4,
    amount: 200,
  },
  {
    name: "Amazon",
    image: Amazon,
    noOfTransactions: 3,
    amount: 180,
  },
  {
    name: "Subway",
    image: Subway,
    noOfTransactions: 2,
    amount: 125,
  },
];

export type TopTransactionsType = (typeof TOP_TRANSACTIONS)[number];
