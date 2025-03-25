import { Suspense } from "react";
import { AppRouter } from "./";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Routing } from "../pages";
import { Header } from "../widgets";

export const App = () => {
  return (
    <AppRouter>
      <MantineProvider>
        <Suspense>
          <div>
            <Header />
            <Routing />
          </div>
        </Suspense>
      </MantineProvider>
    </AppRouter>
  );
};
