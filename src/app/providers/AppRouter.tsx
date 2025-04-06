import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface RouterProps {
  children: ReactNode;
}
export const AppRouter = ({ children }: RouterProps) => (
  <BrowserRouter>{children}</BrowserRouter>
);
