import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Space,
  useMantineTheme,
} from "@mantine/core";
import Cases from "./visualization/Cases";
function MapInBox() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div style={{ width: 800, margin: "auto" }}>
        <Card shadow="sm" padding="lg">
          <Cases />
        </Card>
      </div>
    </div>
  );
}

export default MapInBox;
