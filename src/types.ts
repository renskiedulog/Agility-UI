import { ReactNode } from "react";
import { widths } from "./Components/utility";

/**
 * Props for the Flex component.
 */
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to apply to the Flex component. */
  className?: string;
  /** The children elements to be rendered inside the Flex component. */
  children: ReactNode;
  /** The breakpoint at which the Flex component's layout changes. */
  breakPoint?: "sm" | "md" | "lg" | "xl";
  /**
   * The flex style of the Flex component.
   * - `to-column`: Renders children in a row to column layout.
   * - `to-row`: Renders children in a column to row layout.
   */
  flexStyle?: "to-column" | "to-row";
  /**
   * The Width of the Flex component.
   * - `sm`: 60% Width.
   * - `md`: 80% Width.
   * - `lg`: 90% Width.
   * - `full`: 100% Width.
   *  - Tailwind Custom Class.
   */
  width?: keyof typeof widths | string;
}

