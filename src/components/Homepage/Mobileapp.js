import React from "react";
import {
  Card,
  Grid,
  Button,
  Text,
  Space,
  Title,
  useMantineTheme,
} from "@mantine/core";
import WhySahayak from "./WhySahayak";

function Mobileapp() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div style={{ margin: "auto" }}>
      <Card>
        <Grid grow>
          <Grid.Col span={5}>
            <Title order={3}>Download Sahayak Health Mobile Application</Title>
          </Grid.Col>
          <Grid.Col span={3}>
            <Button>Download Now!</Button>
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
}

export default Mobileapp;
