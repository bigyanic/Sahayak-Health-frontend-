import React from "react";
import {
  Card,
  Avatar,
  Image,
  Text,
  Grid,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function MainProfile() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div style={{ margin: "auto" }}>
      <Card shadow="sm" padding="lg">
        <Grid grow>
          <Grid.Col span={4}>1</Grid.Col>
          <Grid.Col span={4}>2</Grid.Col>
        </Grid>
      </Card>
    </div>
  );
}

export default MainProfile;
