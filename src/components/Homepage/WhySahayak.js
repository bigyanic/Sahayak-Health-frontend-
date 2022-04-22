import React from "react";
import {
  Card,
  Image,
  Blockquote,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Space,
  useMantineTheme,
} from "@mantine/core";

function WhySahayak() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div>
      <Title align="center" order={3}>
        Why Sahayak Health
      </Title>
      <Space h="xl" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: 340, margin: "auto" }}>
          <Card shadow="sm" padding="xl">
            <Card.Section>
              <Image
                src="https://www.unicef.org/sites/default/files/styles/press_release_feature/public/LUX_3090.JPG?itok=HsBFuep-"
                height={190}
                alt="Norway"
              />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </div>
        <Space w="lg" />
        <div style={{ width: 340, margin: "auto" }}>
          <Card shadow="sm" padding="xl">
            <Card.Section>
              <Image
                src="https://www.smchealth.org/sites/main/files/imagecache/thumbnail/main-images/latino_child_atdoctor.jpg?1578406232"
                height={190}
                alt="Norway"
              />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </div>
        <Space w="lg" />
        <div style={{ width: 340, margin: "auto" }}>
          <Card shadow="sm" padding="xl">
            <Card.Section>
              <Image
                src="https://previews.123rf.com/images/oksun70/oksun701508/oksun70150800027/43214148-m%C3%A9decin-examens-infantile-enfant-gar%C3%A7on-pour-enfants-avec-st%C3%A9thoscope.jpg"
                height={190}
                alt="Norway"
              />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
          </Card>
        </div>
        <Space w="lg" />
      </div>
      <div>
        <Card shadow="sm" padding="lg"></Card>
      </div>
    </div>
  );
}

export default WhySahayak;
