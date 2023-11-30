import { useLayoutEffect } from "react";

import { TransactionHeader } from "./components/TransactionHeader";
import { TransactionNavigationProps } from "./Transaction";

export default function useTransaction({
  navigation,
}: TransactionNavigationProps) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: TransactionHeader,
    });
  }, [navigation]);

  return;
}
