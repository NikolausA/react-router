import { Link } from "react-router-dom";
import { AuthComponent } from "../../components";
import logo from "../../assets/logo.svg";
import { Group, Image, NavLink, Box } from "@mantine/core";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <Box className={styles.header}>
      <Link to="/">
        <Image src={logo} alt="ricky&morty logo" w={60} />
      </Link>

      <Group gap="xl" className={styles.navGroup}>
        <NavLink
          href="/character"
          label="CHARACTERS"
          className={styles.navLink}
          classNames={{ label: styles.navLabel }}
          active
        />
        <NavLink
          href="/episode"
          label="EPISODE"
          className={styles.navLink}
          classNames={{ label: styles.navLabel }}
          active
        />

        <NavLink
          href="/location"
          label="LOCATION"
          className={styles.navLink}
          classNames={{ label: styles.navLabel }}
          active
        />

        <AuthComponent />
      </Group>
    </Box>
  );
};
