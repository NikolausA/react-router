import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Credentials } from "../../../../types";
import styles from "./loginForm.module.css";

interface SigninFormProps {
  onSubmit: (credentials: Credentials) => void;
}

export const LoginForm = ({ onSubmit }: SigninFormProps) => {
  const form = useForm<Credentials>({
    mode: "controlled",
    initialValues: { name: "", email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length >= 6 ? null : "Password too short"),
    },
  });

  const handleSubmit = (values: Credentials) => {
    onSubmit(values);
    form.reset();
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Name"
        classNames={{ label: styles.inputLabel }}
        placeholder="Enter your name"
        key={form.key("name")}
        {...form.getInputProps("name")}
        mt="md"
      />
      <TextInput
        withAsterisk
        label="Email"
        classNames={{ label: styles.inputLabel }}
        placeholder="your@email.com"
        key={form.key("email")}
        {...form.getInputProps("email")}
        mt="md"
      />
      <TextInput
        withAsterisk
        label="Password"
        classNames={{ label: styles.inputLabel }}
        type="password"
        placeholder="Enter password"
        key={form.key("password")}
        {...form.getInputProps("password")}
        mt="md"
      />

      <Group justify="center" mt="md">
        <Button onClick={handleReset} type="button">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};
