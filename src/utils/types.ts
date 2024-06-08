import { ReactNode } from "react";
import { widths } from "./utility";

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
  flexStyle?: "row-to-col" | "col-to-row" | "row" | "col";
  /**
   * The Width of the Flex component.
   * - `sm`: 60% Width.
   * - `md`: 80% Width.
   * - `lg`: 90% Width.
   * - `full`: 100% Width.
   *  - Tailwind Custom Class.
   */
  width?: keyof typeof widths;
}

export interface TextProps extends React.HtmlHTMLAttributes<Text> {
  /** Additional CSS classes to apply to the Text component. */
  className?: string;
  /** The children elements to be rendered inside the Text component. */
  children: ReactNode;
  /**
   * The type of text element to render.
   * - `p`: Paragraph text.
   *     Default: `text-sm md:text-base lg:text-lg`
   * - `h1`: Heading level 1.
   *     Default: `text-3xl md:text-4xl lg:text-5xl`
   * - `h2`: Heading level 2.
   *     Default: `text-2xl md:text-3xl lg:text-4xl`
   * - `h3`: Heading level 3.
   *     Default: `text-xl md:text-2xl lg:text-3xl`
   * - `h4`: Heading level 4.
   *     Default: `text-lg md:text-xl lg:text-2xl`
   * - `h5`: Heading level 5.
   *     Default: `text-base md:text-lg lg:text-xl`
   * - `h6`: Heading level 6.
   *     Default: `text-sm md:text-base lg:text-lg`
   * - `span`: Generic inline text container.
   *     Default: `text-base md:text-lg lg:text-xl`
   */
  textType: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

  /**
   * Overrides the size of the element.
   * - `xs`: Extra small
   *     Default: `text-[10px] md:text-xs lg:text-sm`
   * - `sm`: Small
   *     Default: `text-xs md:text-sm lg:text-base`
   * - `md`: Medium
   *     Default: `text-sm md:text-base lg:text-lg`
   * - `lg`: Large
   *     Default: `text-base md:text-lg lg:text-xl`
   * - `xl`: Extra large
   *     Default: `text-lg md:text-xl lg:text-2xl`
   * - `2xl`: Larger sizes
   *     Default: `text-xl md:text-2xl lg:text-3xl`
   * - `3xl`: Larger sizes
   *     Default: `text-2xl md:text-3xl lg:text-4xl`
   * - `4xl`: Larger sizes
   *     Default: `text-3xl md:text-4xl lg:text-5xl`
   * - `5xl`: Larger sizes
   *     Default: `text-4xl md:text-5xl lg:text-6xl`
   * - `6xl`: Larger sizes
   *     Default: `text-5xl md:text-6xl lg:text-7xl`
   * - `7xl`: Larger sizes
   *     Default: `text-6xl md:text-7xl lg:text-8xl`
   */
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
}
