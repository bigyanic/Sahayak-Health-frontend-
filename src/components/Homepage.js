import {
  Card,
  Blockquote,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Space,
  useMantineTheme,
} from "@mantine/core";
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
            <Blockquote cite="– Forrest Gump">
              Life is like an npm install – you never know what you are going to
              get.
            </Blockquote>
            <Space h="xl" />

            <WhySahayak />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Homepage;
