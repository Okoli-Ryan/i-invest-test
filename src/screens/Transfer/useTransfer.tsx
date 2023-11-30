import React, { useLayoutEffect } from "react";

import { ROUTES } from "../../core/Routes";
import { TransferHeader } from "./components/TransferHeader";
import { TransferNavigationProps } from "./Transfer";

export default function useTransfer({ navigation }: TransferNavigationProps) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: TransferHeader,
    });
  });

  function navigateToReceipt(userId: number) {
    navigation.navigate(ROUTES.main.Receipt.name, { userId });
  }

  return { navigateToReceipt };
}
