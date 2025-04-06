import { Character } from "../../types";
import { createLocalDate } from "../../utils";
import { DetailItem } from "../../shared";
import { Text, Image, Stack, Paper } from "@mantine/core";
import styles from "./characterDetails.module.css";

export const CharacterDetails = (props: Character) => {
  return (
    <Paper className={styles.container}>
      <Image
        src={props.image}
        alt={props.name}
        radius="md"
        className={styles.image}
      />

      <Stack className={styles.details}>
        <Text className={styles.name}>{props.name}</Text>

        <DetailItem label="Species" value={props.species} />
        <DetailItem label="Type" value={props.type || "Unknown"} />
        <DetailItem label="Status" value={props.status} />
        <DetailItem label="Gender" value={props.gender} />
        <DetailItem label="Created" value={createLocalDate(props.created)} />
      </Stack>
    </Paper>
  );
};
