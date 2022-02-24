import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function MainProfile() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" padding="lg"></Card>
    </div>
  );
}

export default MainProfile;
