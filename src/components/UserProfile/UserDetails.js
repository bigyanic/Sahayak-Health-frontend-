import { React, useEffect, useState } from "react";
import axios from "axios";
import { useLocalStorageValue } from '@mantine/hooks';

import { Card,Group,Badge, Text, Space, Title, useMantineTheme } from "@mantine/core";
function UserDetails() {
  const theme = useMantineTheme();
  let useremail=localStorage.getItem("useremail");
console.log("in user details",useremail);


  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
    const [data, setData] = useState([]);
    const userEmail= localStorage.getItem("userEmail");
    console.log("in user details",userEmail);
    useEffect(() => {
    
      axios
        .get(`http://20.41.221.66:7000/patient/getreg/${userEmail},`)
        .then((response) => {
          const res = response.data;
          console.log(res);
          setData(res);
        })
        .catch((error) => console.log(error));
    }, []);

  // const arr = data.map((data) => {
    
  // });

    return (
    <div>
     
      <Space h="xl" />
      <Card shadow="sm" p="lg">

      <Title order={1}>{data.full_name}</Title>
      <Space w="xl" />

      

      <Space h="md" />
      <Group>
      <Text weight={700}>Email:</Text>
      <Text size="lg" style={{ color: secondaryColor }}>
        hello@example.com
      </Text>
      </Group>
      <Space h="sm" />
      <Group>
      <Text weight={700}>Address:</Text>
      <Text size="lg" style={{ color: secondaryColor}}>
        Ramghat Pokhara-12, Amarshing Marga, Nepal
      </Text>
      </Group>
      <Space h="sm" />
      <Group> 
      <Text weight={700}>Phone Number:</Text>
      <Text size="lg" style={{ color: secondaryColor }}>
9876543210
      </Text>
      </Group>
      <Space h="sm" />
      <Group>
      <Text weight={700}>Date of Birth:</Text>
      <Text size="lg" style={{ color: secondaryColor}}>
        1999-12-18
      </Text>
      </Group>
      <Space h="sm" />
      <Group>
      <Text weight={700}>Gender:</Text>
      <Text size="lg" style={{ color: secondaryColor}}>
      
                Male
              </Text>
              </Group>
      
      </Card>
    </div>
  );
}

export default UserDetails;
