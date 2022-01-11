import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './theme';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the avatar
   */
  size?: 'large' | 'regular' | 'small';
  /**
   * Alternative text for the avatar image
   */
  alt?: string;
  /**
   * The source for the avatar image
   */
  src: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { size = 'regular', src, alt, className, ...other } = props;
  const {
    theme: { avatar },
  } = useContext(ThemeContext);

  const baseStyle = 'inline-block relative ' + avatar.base;
  const sizeStyles = {
    large: avatar.size.large,
    regular: avatar.size.regular,
    small: avatar.size.small,
  };

  const cls = classNames(baseStyle, sizeStyles[size], className);

  return (
    <div className={cls} ref={ref} {...other}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-primary-300" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </div>
  );
});

export default Avatar;
