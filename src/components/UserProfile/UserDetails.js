import React from "react";
import { Card, Text, Space, Title, useMantineTheme } from "@mantine/core";
function UserDetails() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div>
      {/* <Card shadow="sm" padding="lg" align="left">
        <Card.Section> */}
      <Space h="xl" />
      <Title order={2}>Bigyan Timilsina</Title>
      <Space h="md" />
      <Text weight={500}>Email:</Text>
      <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        hello@example.com
      </Text>
      <Space h="sm" />
      <Text weight={500}>Address:</Text>
      <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        Ramghat Pokhara-12, Amarshing Marga, Nepal
      </Text>
      {/* </Card.Section>
      </Card> */}
    </div>
  );
}

export default UserDetails;
