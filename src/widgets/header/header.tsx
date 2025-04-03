import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthComponent } from "../../features";
import logo from "../../assets/logo.svg";
import { Group, Image, Box, Burger, Drawer, Portal } from "@mantine/core";
import styles from "./header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      <Burger
        opened={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.burger}
      />
      <Portal>
        <Drawer
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          position="right"
          zIndex={1000}
          size="70%"
          style={{ position: "fixed" }}
          withOverlay
          lockScroll
        >
          <nav className={styles.mobileNav}>
            <NavLink
              to="/character"
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              CHARACTERS
            </NavLink>
            <NavLink
              to="/episode"
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              EPISODE
            </NavLink>
            <NavLink
              to="/location"
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              LOCATION
            </NavLink>
            <AuthComponent />
          </nav>
        </Drawer>
      </Portal>
    </Box>
  );
};
