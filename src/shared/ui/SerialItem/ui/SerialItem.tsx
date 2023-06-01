import { FC, ReactNode } from "react";
import styles from "./SerialItem.module.css";

interface ISerialItemProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

export const SerialItem: FC<ISerialItemProps> = ({
  className = "",
  children,
  onClick,
}) => {
  return (
    <div className={`${styles.root} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
