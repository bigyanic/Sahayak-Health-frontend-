import {
  AppShell,
  Navbar,
  Header,
  Tabs,
  ActionIcon,
  useMantineColorScheme,
  Text,
} from "@mantine/core";
import TabMenu from "./TabMenu";
import {
  BackpackIcon,
  CameraIcon,
  HomeIcon,
  ImageIcon,
  RocketIcon,
} from "@modulz/radix-icons";
import HeaderContent from "./HeaderContent";
import Homepage from "./Homepage";

function Navbarx() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar padding="md">
          <Navbar.Section>
            <Tabs variant="pills" orientation="vertical">
              <Tabs.Tab label="Homepage" icon={<HomeIcon />}>
                <Homepage />
              </Tabs.Tab>
              <Tabs.Tab label="Data Visualization" icon={<CameraIcon />}>
                Messages tab content
              </Tabs.Tab>
              <Tabs.Tab label="About Project" icon={<BackpackIcon />}>
                Settings tab content
              </Tabs.Tab>
              <Tabs.Tab
                label="Emergency Services "
                icon={<RocketIcon />}
                color="red"
              >
                Settings tab content
              </Tabs.Tab>
            </Tabs>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} padding="md">
          <HeaderContent />
        </Header>
      }
    ></AppShell>
  );
}
export default Navbarx;
