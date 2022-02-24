import React from "react";
import { Paper, Text, Space, Title, Image } from "@mantine/core";

import TextLogo from "./TextLogo";
function TopName() {
  return (
    <div>
      <Text color="blue" size="md">
        Welcome To,
      </Text>
      {/* <TextLogo /> */}

      <Title order={1}>Sahayak Health</Title>
      <Space h={70} />
      <p>
        Use it to create cards, dropdowns, modals and other components that
        require background with shadow
      </p>
    </div>
  );
}

export default TopName;
