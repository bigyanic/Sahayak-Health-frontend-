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
  Title,
  ScrollArea,
  Group,
  useMantineTheme,
} from "@mantine/core";
import AppointmentList from "./AppointmentList";
import ProfileImage from "./ProfileImage";
import UserDetails from "./UserDetails";

function MainProfile() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div style={{ margin: "auto" }}>
      <ScrollArea
        style={{ height: "82vh", overflowX: "hidden" }}
        offsetScrollbars
      >
        <Paper>
          <Grid>
            <Grid.Col span={2}>
              <ProfileImage />
            </Grid.Col>
            <Space w="xl" />
            <Grid.Col span={5}>
              <UserDetails />
            </Grid.Col>

            <AppointmentList />
          </Grid>
        </Paper>
      </ScrollArea>
    </div>
  );
}

export default MainProfile;
