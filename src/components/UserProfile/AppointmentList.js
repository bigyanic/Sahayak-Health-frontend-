import React from "react";
import {
  Card,
  Paper,
  Badge,
  Image,
  Title,
  Text,
  Grid,
  Space,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
function AppointmentList() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <>
      <Paper padding="md" shadow="xs" radius="lg" withBorder>
        <Title align="center" order={2}>
          My Appointments
        </Title>
        <Space h="md" />

        <div style={{ width: 380, margin: "auto" }}>
          <Card shadow="sm" padding="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="yellow" variant="light">
                Pending
              </Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>

          <Space h="md" />

          <Card shadow="sm" padding="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="green" variant="light">
                Approved
              </Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>

          <Space h="md" />

          <Card shadow="sm" padding="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                Ended
              </Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </div>
      </Paper>
    </>
  );
}

export default AppointmentList;
