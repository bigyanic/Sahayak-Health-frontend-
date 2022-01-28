import { React, useEffect, useState } from "react";
import { Accordion } from "@mantine/core";
import axios from "axios";
import { Card, useMantineTheme } from "@mantine/core";

function Faq() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://corona.askbhunte.com/api/v1/faqs")
      .then((response) => {
        const res = response.data;
        setData(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const arr = data.map((data) => {
    return (
      <Accordion>
        <Accordion.Item label={data.question}>{data.answer}</Accordion.Item>
      </Accordion>
    );
  });

  return <div>{arr}</div>;
}

export default Faq;
