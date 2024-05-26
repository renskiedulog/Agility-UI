import { twMerge } from "tailwind-merge";
import { FlexProps } from "../types";
import { widths } from "./utility";

/**
 * Flex Component
 * @description The Flex component creates flexible layouts, allowing control over orientation and width.
 * @param {"sm" | "md" | "lg" | "xl"} [props.breakPoint] - The breakpoint at which the Flex component's layout changes.
 * @param {"to-column" | "to-row"} [props.flexStyle="to-column"] - The flex style of the Flex component.
 * @param {"sm" | "md" | "lg" | "full" | string} [props.width="full"] - The width of the Flex component.
 */
const Flex = ({
  className,
  children,
  breakPoint,
  flexStyle = "to-column",
  width = "full",
  ...rest
}: FlexProps) => {
  const baseClasses = ["mx-auto", "flex"];

  const orientation = {
    "to-column": `flex-col ${breakPoint || "md"}:flex-row`,
    "to-row": `flex-row ${breakPoint || "md"}:flex-col`,
  };

  const flexWidth = widths[width as keyof typeof widths] || width;

  baseClasses.push(orientation[flexStyle], flexWidth);

  const preClasses = baseClasses.join(" ");

  return (  
    <div className={twMerge(preClasses, className)} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
