import React, { useState } from "react";

export default function useVerificationSections() {
  const [activeIndex, setActiveIndex] = useState(0);

  function selectActiveIndex(index: number) {
    setActiveIndex(index);
  }

  return { selectActiveIndex, activeIndex };
}
