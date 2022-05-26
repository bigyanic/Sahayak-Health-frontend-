import React from "react";
import {
  Card,
  Grid,
  Button,
  Group,
  Text,
  Space,
  Title,
  useMantineTheme,
  Container,
  Paper,
} from "@mantine/core";
import WhySahayak from "./WhySahayak";
import MobileAppLogo from "./MobileAppLogo";

function Mobileapp() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

function DownloadNow() {
  window.open("https://play.google.com/store/apps/details?id=com.sahayak.sahayak");
  
}

  return (
    <div style={{ margin: "auto" }}>
      <Paper>
        <Container>
        <Space h="md" />

        <Group>
        
            <MobileAppLogo/>
            <Title order={2}> Sahayak Health Mobile Application</Title>
            <Space w="md" />

            <Button onClick={DownloadNow}>Download Now!</Button>
       
        </Group>
        <Space h="md" />

        </Container>
      </Paper>
    </div>
  );
}

export default Mobileapp;
