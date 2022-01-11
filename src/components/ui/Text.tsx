import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './theme';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  /**
   * The variant type of the element
   */
  type?: 'p' | 'strong' | 'em' | 'span' | 'div';
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  variant?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(function Text(props, ref) {
  const { children, type = 'h3', variant, className, ...other } = props;
  const {
    theme: { text },
  } = useContext(ThemeContext);

  const baseStyle = text.base;
  const typeStyle = text.type[type];

  const cls = classNames(baseStyle, typeStyle, className);

  const Text = type || 'p';

  return (
    <Text className={cls} ref={ref} {...other}>
      {children}
    </Text>
  );
});

export default Text;
