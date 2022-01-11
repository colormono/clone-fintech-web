import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "./theme";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  valid?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container(props, ref) {
    const { children, valid, className, ...other } = props;
    const {
      theme: { container },
    } = useContext(ThemeContext);

    const baseStyle = container.base;

    const cls = classNames(baseStyle, className);

    return (
      <div className={cls} ref={ref} {...other}>
        {children}
      </div>
    );
  }
);

export default Container;
