import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "../../features";
import { Credentials } from "../../types/credentials";
import { useAuth } from "../../features/auth/model/AuthProvider";
import { Paper, Title } from "@mantine/core";
import styles from "./loginPage.module.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from || "/";
  const handleSubmit = (credentials: Credentials) => {
    if (auth) {
      auth.signin(credentials, () => {
        navigate(from, { replace: true });
      });
    }
  };
  return (
    <Paper className={styles.container}>
      <Title order={2} ta="center" mb="xl" className={styles.formTitile}>
        Login
      </Title>
      <LoginForm onSubmit={handleSubmit} />
    </Paper>
  );
};
