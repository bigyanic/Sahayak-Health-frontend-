import React from "react";
import { Card,Group,Badge, Text, Space, Title, useMantineTheme } from "@mantine/core";
function UserDetails() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div>
     
      <Space h="xl" />
      <Card shadow="sm" p="lg">

      <Title order={1}>Bigyan Timilsina</Title>
      <Space w="xl" />

      

      <Space h="md" />
      <Group>
      <Text weight={700}>Email:</Text>
      <Text size="lg" style={{ color: secondaryColor }}>
        hello@example.com
      </Text>
      </Group>
      <Space h="sm" />
      <Group>
      <Text weight={700}>Address:</Text>
      <Text size="lg" style={{ color: secondaryColor}}>
        Ramghat Pokhara-12, Amarshing Marga, Nepal
      </Text>
      </Group>
      <Space h="sm" />
      <Group> 
      <Text weight={700}>Phone Number:</Text>
      <Text size="lg" style={{ color: secondaryColor }}>
9876543210
      </Text>
      </Group>
      <Space h="sm" />
      <Group>
      <Text weight={700}>Date of Birth:</Text>
      <Text size="lg" style={{ color: secondaryColor}}>
        1999-12-18
      </Text>
      </Group>
      <Space h="sm" />
      <Group>
      <Text weight={700}>Gender:</Text>
      <Text size="lg" style={{ color: secondaryColor}}>
      
                Male
              </Text>
              </Group>
      
      </Card>
    </div>
  );
}

export default UserDetails;
