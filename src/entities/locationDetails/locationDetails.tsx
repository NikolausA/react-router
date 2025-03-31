import { Location } from "../../types";
import { createLocalDate } from "../../utils";
import { DetailItem } from "../../shared";
import { Text, Stack, Paper } from "@mantine/core";
import styles from "./locationDetals.module.css";

export const LocationDetails = (props: Location) => {
  return (
    <Paper className={styles.container}>
      <Stack className={styles.details}>
        <Text className={styles.name}>{props.name}</Text>

        <DetailItem label="Type" value={props.type} />
        <DetailItem label="Dimension" value={props.dimension} />
        <DetailItem label="Created" value={createLocalDate(props.created)} />
      </Stack>
    </Paper>
  );
};
