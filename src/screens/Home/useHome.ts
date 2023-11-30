import { useLayoutEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import { ROUTES } from "../../core/Routes";
import { HomeNavigationProps } from "./Home";

export default function useHome({ navigation }: HomeNavigationProps) {
  useLayoutEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  function navigateToTransfer() {
    navigation.navigate(ROUTES.main.Transfer.name);
  }

  function navigateToTransactions() {
    navigation.navigate(ROUTES.main.Transaction.name);
  }

  function navigateToFinance() {
    navigation.navigate(ROUTES.main.Finance.name);
  }

  return { navigateToTransfer, navigateToTransactions, navigateToFinance };
}
