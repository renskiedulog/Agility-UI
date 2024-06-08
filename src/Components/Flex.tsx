import * as React from "react";
import { FlexProps } from "../utils/types";
import { orientation, widths } from "../utils/utility";
import { cn } from "../utils/cn";

/**
 * Flex Component
 * @description The Flex component creates flexible layouts, allowing control over orientation and width.
 * @param {"sm" | "md" | "lg" | "xl"} [props.breakPoint] - The breakpoint at which the Flex component's layout changes. Default: "md"
 * @param {"row-to-column" | "col-to-row" | "row" | "col"} [props.flexStyle="to-column"] - The flex style of the Flex component. Default: "row"
 * @param {"sm" | "md" | "lg" | "full" | string} [props.width="full"] - The width of the Flex component. Default: "full"
 */
const Flex = ({
  className,
  children,
  breakPoint = "md",
  flexStyle = "row",
  width = "full",
  ...rest
}: FlexProps) => {
  
  const outputClasses = `flex ${orientation[breakPoint][flexStyle]} ${widths[width]}`;

  return (
    <div className={cn(outputClasses, className)} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
