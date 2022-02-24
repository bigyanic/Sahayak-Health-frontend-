import React from "react";
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
import { ChevronRightIcon } from "@modulz/radix-icons";

function UserProfileButton() {
  const navigate = new useNavigate();
  const location = useLocation().pathname;
  const onClickHandler = () => {
    navigate(`/createuser`);
  };

  return (
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
        {<ChevronRightIcon />}
      </Group>
    </UnstyledButton>
  );
}

export default UserProfileButton;
