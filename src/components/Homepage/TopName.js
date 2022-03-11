import React from "react";
import {  Text, Space, Title } from "@mantine/core";

import TextLogo from "./TextLogo";
function TopName() {
  return (
    <div>
                  <Space h={90} />

      <Text size="xl" weight={700}>
        Welcome To,
      </Text>
      <TextLogo />

      {/* <Title order={1}>Sahayak Health</Title> */}
      <Space h={40} />
      <p>
        Use it to create cards, dropdowns, modals and other components that
        require background with shadow
      </p>
      <Space h={40} />

    </div>
  );
}

export default TopName;
