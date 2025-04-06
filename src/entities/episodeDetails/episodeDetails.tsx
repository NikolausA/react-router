import { Episode } from "../../types";
import { createLocalDate } from "../../utils";
import { DetailItem } from "../../shared";
import { Text, Stack, Paper } from "@mantine/core";
import styles from "./episodeDetails.module.css";

export const EpisodeDetails = (props: Episode) => {
  return (
    <Paper className={styles.container}>
      <Stack className={styles.details}>
        <Text className={styles.name}>{props.name}</Text>

        <DetailItem label="Species" value={props.episode} />
        <DetailItem label="Air date" value={createLocalDate(props.air_date)} />
        <DetailItem label="Created" value={createLocalDate(props.created)} />
      </Stack>
    </Paper>
  );
};
