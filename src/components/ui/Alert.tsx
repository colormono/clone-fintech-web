/**
 * Alert v.01
 * Check the latest version at:
 *  https://mate-ui.truenorth.co
 */
import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "./theme";
import {
  CloseIcon,
  NeutralIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  InfoIcon,
} from "./Icons";

enum Type {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
  neutral = "neutral",
}

enum Size {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant type of the alert
   */
  type?: keyof typeof Type;
  /**
   * The variant size of the alert
   */
  size?: keyof typeof Size;
  /**
   * Toggle icon visibility
   */
  showIcon?: boolean;
  /**
   * Pass a custom <Icon />
   */
  icon?: React.ReactNode;
  /**
   * Alert title
   */
  title?: string;
  /**
   * Content below the title
   */
  message?: string;
  /**
   * Inline action text button
   */
  actionLabel?: string;
  /**
   * If defined, shows the inline action button that calls this function
   */
  onAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * If defined, shows the close button that calls this function
   */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Alert is used to communicate the state or status of a
 * page, feature or action
 */
const Alert: React.FC<AlertProps> = ({
  className,
  children,
  type = "neutral",
  size = "md",
  showIcon = true,
  icon,
  title,
  message,
  actionLabel,
  onAction,
  onClose,
  ...other
}) => {
  const {
    theme: { alert },
  } = useContext(ThemeContext);

  let AlertIcon = (icon as any) || null;
  if (!AlertIcon) {
    switch (type) {
      case "success":
        AlertIcon = SuccessIcon;
        break;
      case "warning":
        AlertIcon = WarningIcon;
        break;
      case "error":
        AlertIcon = ErrorIcon;
        break;
      case "info":
        AlertIcon = InfoIcon;
        break;
      case "neutral":
        AlertIcon = NeutralIcon;
        break;
      default:
        AlertIcon = NeutralIcon;
    }
  }

  const baseStyle = alert.base;
  const typeStyle = alert.type[type];
  const sizeStyle = alert.size[size];

  const iconBaseStyle = alert.icon.base;
  const iconTypeStyle = alert.icon[type];
  const iconSizeStyle = alert.icon[size];

  const titleBaseStyle = alert.title.base;
  const titleTypeStyle = alert.title[type];
  const titleSizeStyle = alert.title[size];

  const messageBaseStyle = alert.message.base;
  const messageTypeStyle = alert.message[type];
  const messageSizeStyle = alert.message[size];

  const inlineActionBaseStyle = alert.inlineAction.base;
  const inlineActionTypeStyle = alert.inlineAction[type];
  const inlineActionSizeStyle = alert.inlineAction[size];

  const closeBaseStyle = alert.close.base;
  const closeTypeStyle = alert.close[type];
  const closeSizeStyle = alert.close[size];

  const cls = classNames(
    baseStyle,
    typeStyle,
    sizeStyle,
    className,
    "mateui-alert flex justify-between items-start"
  );
  const iconCls = classNames(iconBaseStyle, iconTypeStyle, iconSizeStyle);
  const titleCls = classNames(
    titleBaseStyle,
    titleTypeStyle,
    titleSizeStyle,
    message || children ? "mb-1" : ""
  );
  const messageCls = classNames(
    messageBaseStyle,
    messageTypeStyle,
    messageSizeStyle
  );
  const actionCls = classNames(
    inlineActionBaseStyle,
    inlineActionTypeStyle,
    inlineActionSizeStyle
  );
  const closeCls = classNames(closeBaseStyle, closeTypeStyle, closeSizeStyle);

  return (
    <div className={cls} role="alert" {...other}>
      {showIcon && AlertIcon ? <AlertIcon className={iconCls} /> : null}
      <div className="flex-1">
        {title ? <div className={titleCls}>{title}</div> : null}
        {message && !children ? (
          <div className={messageCls}>{message}</div>
        ) : (
          <div>{children}</div> || null
        )}
      </div>
      {onAction && (
        <button
          onClick={onAction}
          aria-label="inline-action"
          className={actionCls}
        >
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button onClick={onClose} aria-label="close">
          <CloseIcon className={closeCls} />
        </button>
      )}
    </div>
  );
};

export default Alert;
