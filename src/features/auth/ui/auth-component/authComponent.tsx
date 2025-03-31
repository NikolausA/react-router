import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../";
import { ActionIcon, Group, Text } from "@mantine/core";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import styles from "./authComponent.module.css";

export const AuthComponent = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const name = auth.user?.name || "";

  const handleSignout = () => {
    auth.signout(() => navigate("/"));
  };

  return (
    <Group className={styles.wrapper}>
      {name ? (
        <div className={styles.user} onClick={handleSignout}>
          <Text span>{name}</Text>
          <ActionIcon variant="transparent" color="dark">
            <ArrowRightStartOnRectangleIcon className={styles.icon} />
          </ActionIcon>
        </div>
      ) : (
        <ActionIcon
          component={Link}
          to="/login"
          variant="transparent"
          color="dark"
        >
          <ArrowRightEndOnRectangleIcon className={styles.icon} />
        </ActionIcon>
      )}
    </Group>
  );
};
