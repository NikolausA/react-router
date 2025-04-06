import { Text } from "@mantine/core";
import styles from "./DetailItem.module.css";

interface DetailItemProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

export const DetailItem = ({ label, value, className }: DetailItemProps) => {
  return (
    <Text className={`${styles.detail} ${className || ""}`}>
      <Text span fw={700} className={styles.label}>
        {label}:
      </Text>{" "}
      {value}
    </Text>
  );
};
