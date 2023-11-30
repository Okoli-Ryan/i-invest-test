import React from "react";

import { ReceiptProps } from "./Receipt";

export default function useReceipt({ route }: ReceiptProps) {
  const userId = route.params?.userId || 0;

  return { userId };
}
