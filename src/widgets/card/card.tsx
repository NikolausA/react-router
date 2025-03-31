import styles from "./card.module.css";
import { Text } from "@mantine/core";

interface CardProps {
  id: number;
  name: string;
  image: string;
}

export const Card = ({ name, image }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.content}>
        <Text className={styles.title} size="xl">
          {name}
        </Text>
      </div>
    </div>
  );
};
