import { Suspense } from "react";
import { AppRouter } from "./";
import { theme } from "./styles/theme";
import { AuthProvider } from "../features/auth/model/AuthProvider";
import { Routing } from "../pages";
import { Header } from "../widgets";
import { MantineProvider, AppShell } from "@mantine/core";
import "@mantine/core/styles.css";
import styles from "./App.module.css";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter>
        <MantineProvider theme={theme}>
          <Suspense>
            <AppShell className={styles.root}>
              <Header />
              <Routing />
            </AppShell>
          </Suspense>
        </MantineProvider>
      </AppRouter>
    </AuthProvider>
  );
};
