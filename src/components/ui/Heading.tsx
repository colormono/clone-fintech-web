import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "./theme";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  /**
   * The variant type of the element
   */
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  variant?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(props, ref) {
    const { children, type = "h3", variant, className, ...other } = props;
    const {
      theme: { heading },
    } = useContext(ThemeContext);

    const baseStyle = heading.base;
    const typeStyle = heading.type[type];

    const cls = classNames(baseStyle, typeStyle, className);

    const Heading = type || "h3";

    return (
      <Heading className={cls} ref={ref} {...other}>
        {children}
      </Heading>
    );
  }
);

export default Heading;
