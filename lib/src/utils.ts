import { useRef } from "react";
import { useColorScheme } from "react-native";

interface ValueNode<T> {
  value: T;
}

export function useStyleSheet<T>(factory: () => T): T {
  const ref = useRef<ValueNode<T>>();

  if (!ref.current) {
    ref.current = { value: factory() };
  }

  return ref.current.value;
}

export function useColorSchemeToggle<T>(light: T, dark: T): T {
  const colorScheme = useColorScheme();

  if (!colorScheme) {
    return light;
  }

  return colorScheme === "light" ? light : dark;
}
