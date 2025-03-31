import { NavLink, Link } from "react-router-dom";
import { AuthComponent } from "../../features";
import logo from "../../assets/logo.svg";
import { Group, Image, Box } from "@mantine/core";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <Box className={styles.header}>
      <Link to="/">
        <Image src={logo} alt="ricky&morty logo" w={60} />
      </Link>

      <Group gap="xl" className={styles.navGroup}>
        <NavLink to="/character" className={styles.navLink}>
          CHARACTERS
        </NavLink>
        <NavLink to="/episode" className={styles.navLink}>
          EPISODE
        </NavLink>
        <NavLink to="/location" className={styles.navLink}>
          LOCATION
        </NavLink>
        <AuthComponent />
      </Group>
    </Box>
  );
};
