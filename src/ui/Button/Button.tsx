import React, {ButtonHTMLAttributes, FC} from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

export const Button: FC<ButtonProps> = ({className, ...buttonProps}) => {
  return <button className={cn(styles.button, className)} {...buttonProps} />;
};
