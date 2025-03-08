import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Credentials } from "../types/credentials";

interface SigninFormProps {
  onSubmit: (credentials: Credentials) => void;
}

export const SigninForm = ({ onSubmit }: SigninFormProps) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputs);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setInputs({ name: "", email: "", password: "" });
  };

  return (
    <form
      className="text-white"
      ref={formRef}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        label="Your name"
        asterisk={true}
        variant="default"
        border="rounded-xl"
      />
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        label="Your email"
        asterisk={true}
        variant="default"
        border="rounded-xl"
        icon={<AtSymbolIcon />}
        iconPosition="left"
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        label="Your password"
        asterisk={true}
        variant="default"
        border="rounded-xl"
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};
