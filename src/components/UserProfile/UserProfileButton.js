import React from "react";
import { UnstyledButton, Group, Avatar,Menu, Text } from "@mantine/core";
import { Settings, Anchor, Photo, MessageCircle, Trash, ArrowsLeftRight } from 'tabler-icons-react';

import { useNavigate, useLocation } from "react-router";
import { ChevronRightIcon } from "@modulz/radix-icons";

function UserProfileButton() {
  const navigate = new useNavigate();
  const location = useLocation().pathname;
  const onClickLoginSignup = () => {
    navigate(`/signupas`);
  };

  return (
    <Menu control={
    <UnstyledButton variant="filled" >
      <Group>
        <Avatar size={40} color="blue">
          SH
        </Avatar>
        <div>
          <Text>Sahayak Health</Text>
          <Text size="xs" color="gray">
            My AI Health Assistant
          </Text>
        </div>
        {<ChevronRightIcon />}
      </Group>
    </UnstyledButton>}>
    <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<Anchor size={14} />} onClick={onClickLoginSignup}>Login & Signup</Menu.Item>
      <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
      <Menu.Item icon={<Photo size={14} />}>Gallery</Menu.Item>
    
    </Menu>
  );
}

export default UserProfileButton;
