import React, { useState } from "react";
import { Tabs, Navbar } from "@mantine/core";
import { useNavigate, useLocation } from "react-router";
import TABS from "./TabData";

const NavBarRouter = () => {
  const navigate = new useNavigate();
  const location = useLocation().pathname;
  const indexOfPath = TABS.findIndex((tab) => "/" + tab.key === location);
  console.log({ indexOfPath });
  const [activeTab, setActiveTab] = useState(indexOfPath);

  const onChange = (active, tabKey) => {
    navigate(tabKey);
    setActiveTab(active);
  };
  return (
    <Navbar padding="md" width={{ base: 250 }}>
      <Navbar.Section>
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
    </Navbar>
  );
};

export default NavBarRouter;
