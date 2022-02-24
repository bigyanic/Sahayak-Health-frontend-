import {
  Card,
  Blockquote,
  Text,
  Badge,
  Button,
  Group,
  Paper,
  Space,
  useMantineTheme,
} from "@mantine/core";
import TopName from "./Homepage/TopName";
import WhySahayak from "./Homepage/WhySahayak";

function Homepage() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ margin: "auto" }}>
          <Card shadow="sm" padding="xl">
            <TopName />
            <Space h="xl" />
            <Paper padding="sm" shadow="xs">
              <Blockquote cite="– Forrest Gump">
                Life is like an npm install – you never know what you are going
                to get.
              </Blockquote>
            </Paper>
            <Space h="xl" />

            <WhySahayak />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Homepage;
