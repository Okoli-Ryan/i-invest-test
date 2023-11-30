import React from "react";
import { Image } from "react-native";

interface AvatarProps {
  src: any;
  size: number;
}

export default function Avatar({ src, size }: AvatarProps) {
  return (
    <Image
      source={src}
      style={{
        width: size,
        height: size,
        resizeMode: "contain",
        borderRadius: size / 3,
      }}
    />
  );
}
