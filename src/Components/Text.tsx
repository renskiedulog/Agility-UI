import { cn } from "../utils/cn";
import { TextProps } from "../utils/types";


/**
 * Text Component
 * @description The Text component renders text with specified styling. The sizes property can be used to overwrite the default values set by textType.
 * @param {string} [props.className] - Additional classes to be added to the component.
 * @param {React.ReactNode} [props.children] - The text content to be rendered.
 * @param {"p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"} [props.textType="p"] - The type of text element to render.
 * @param {"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"} [props.size] - The size of the text element, used to overwrite the default values set by textType.
 */
const Text = ({ className, children, textType = "p", size }: TextProps) => {
  const Element = textType || "p";
  
  const textTypes = {
    p: "text-sm md:text-base lg:text-lg",
    h1: "text-3xl md:text-4xl lg:text-5xl",
    h2: "text-2xl md:text-3xl lg:text-4xl",
    h3: "text-xl md:text-2xl lg:text-3xl",
    h4: "text-lg md:text-xl lg:text-2xl",
    h5: "text-base md:text-lg lg:text-xl",
    h6: "text-sm md:text-base lg:text-lg",
    span: "text-xs md:text-sm lg:text-base",
  }

  const sizes = {
    xs: "text-[10px] md:text-xs lg:text-sm",
    sm: "text-xs md:text-sm lg:text-base",
    md: "text-sm md:text-base lg:text-lg",
    lg: "text-base md:text-lg lg:text-xl",
    xl: "text-lg md:text-xl lg:text-2xl",
    "2xl": "text-xl md:text-2xl lg:text-3xl",
    "3xl": "text-2xl md:text-3xl lg:text-4xl",
    "4xl": "text-3xl md:text-4xl lg:text-5xl",
    "5xl": "text-4xl md:text-5xl lg:text-6xl",
    "6xl": "text-5xl md:text-6xl lg:text-7xl",
    "7xl": "text-6xl md:text-7xl lg:text-8xl",
  }
  
  const outputClasses = `${textTypes[textType]} ${size && sizes[size]}`;
  return <Element className={cn(outputClasses, className)}>{children}</Element>;
};

export default Text;
