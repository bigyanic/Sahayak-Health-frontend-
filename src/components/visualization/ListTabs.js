import React from "react";
import { useState } from "react";
import { Tabs } from "@mantine/core";
import Cases from "./Cases";
import ActiveCases from "./ActiveCases";
import CriticalCases from "./CriticalCases";
import Deaths from "./Deaths";

function ListTabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <Tabs color="red" tabPadding="sm">
        <Tabs.Tab label="Cases">
          <Cases />
        </Tabs.Tab>
        <Tabs.Tab label="Active">
          <ActiveCases />
        </Tabs.Tab>
        <Tabs.Tab label="Critical">
          <CriticalCases />
        </Tabs.Tab>
        <Tabs.Tab label="Deaths">
          <Deaths />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default ListTabs;
