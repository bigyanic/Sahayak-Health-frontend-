import React from "react";
import {
  Card,
  Avatar,
  Paper,
  Badge,
  Image,
  Text,
  Grid,
  Space,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import AppointmentList from "./AppointmentList";

function MainProfile() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div style={{ margin: "auto" }}>
      <Card shadow="sm" padding="lg">
        <Grid grow>
          <Grid.Col span={4}>
            <div style={{ width: 340, margin: "auto" }}>
              <Card shadow="sm" padding="lg" align="center">
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1645700489470-044de618d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                    height={200}
                    width={200}
                    radius="100%"
                    alt="Norway"
                  />
                </Card.Section>
                <Space h="lg" />
              </Card>
            </div>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text weight={800} size="xl" align="center">
              Bigyan Timilsina
            </Text>

            <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              hello@example.com
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <AppointmentList />
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
}

export default MainProfile;
