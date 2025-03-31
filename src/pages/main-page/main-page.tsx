import styles from "./mainPage.module.css";
import { Title, Box } from "@mantine/core";

export const MainPage = () => {
  return (
    <Box className={styles.container}>
      <Title className={styles.title} order={1}>
        The Rick and Morty
      </Title>
    </Box>
  );
};
