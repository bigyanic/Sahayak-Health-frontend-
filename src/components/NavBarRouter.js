import React, { useState } from "react";
import {
  Tabs,
  Navbar,
  UnstyledButton,
  Group,
  Paper,
  ScrollArea,
  Avatar,
  ActionIcon,
  Space,
  Text,
} from "@mantine/core";
import { useNavigate, useLocation } from "react-router";
import { useViewportSize } from "@mantine/hooks";
import TABS from "./TabData";

const NavBarRouter = () => {
  const navigate = new useNavigate();
  const location = useLocation().pathname;
  const indexOfPath = TABS.findIndex((tab) => "/" + tab.key === location);
  console.log({ indexOfPath });
  const [activeTab, setActiveTab] = useState(indexOfPath);
  const { height, width } = useViewportSize();

  const onChange = (active, tabKey) => {
    navigate(tabKey);
    setActiveTab(active);
  };

  const onClickHandler = () => {
    navigate(`/createuser`);
  };

  return (
    <Navbar padding="md" width={{ base: 250 }} height={height - 60}>
      <Navbar.Section
        grow
        component={ScrollArea}
        ml={-10}
        mr={-10}
        sx={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <Tabs
          variant="pills"
          orientation="vertical"
          onTabChange={onChange}
          active={activeTab}
        >
          {TABS.map((tab) => (
            <Tabs.Tab tabKey={tab.key} label={tab.label} icon={tab.icon} />
          ))}
        </Tabs>
      </Navbar.Section>

      <Navbar.Section>
        <Paper padding="xs" withBorder>
          <UnstyledButton variant="filled" onClick={onClickHandler}>
            <Group>
              <Avatar size={40} color="blue">
                SH
              </Avatar>
              <div>
                <Text>Sahayak Health</Text>
                <Text size="xs" color="gray">
                  Login & Signup
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        </Paper>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavBarRouter;
