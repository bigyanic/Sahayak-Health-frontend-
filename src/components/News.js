import { React, useEffect, useState } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import axios from "axios";

function News() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [data, setData] = useState([]);

  //Linking API
  useEffect(() => {
    axios
      .get("https://corona.askbhunte.com/api/v1/news")
      .then((response) => {
        const res = response.data;
        setData(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const arr = data.map((data) => {
    return (
      <div style={{ width: 340, margin: "auto" }}>
        <Card shadow="sm" padding="lg">
          <Card.Section>
            {/* Image URL */}
            <Image src={data.image_url} height={160} />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>{data.title}</Text>
            <Badge color="pink" variant="light">
              {data.source}
            </Badge>
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {data.summary}
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={data.url}
          >
            Full News
          </Button>
        </Card>
      </div>
    );
  });
  return <div>{arr}</div>;
}

export default News;
