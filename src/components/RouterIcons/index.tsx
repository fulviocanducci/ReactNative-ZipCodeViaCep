import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IRouterIcons } from "../../types";

export default function RouterIcons({ icons, focused, size, color }: IRouterIcons) {
  return <Ionicons name={focused ? icons[0] : icons[1]} size={size} color={color} />;
}
