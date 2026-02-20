import { centeredLayout, centeredIcon } from "./centered";
import { typeOnlyLayout, typeOnlyIcon } from "./type-only";

export const layouts = [
  centeredLayout,
  typeOnlyLayout,
];

export const layoutIcons: Record<string, React.ReactNode> = {
  centered: centeredIcon,
  "type-only": typeOnlyIcon,
};
