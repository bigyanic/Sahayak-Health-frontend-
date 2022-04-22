import React from "react";
import {
  Card,
  Avatar,
  Paper,
  Badge,
  Image,
  Text,
  Grid,
  Space,
  Title,
  ScrollArea,
  Group,
  useMantineTheme,
} from "@mantine/core";
import AppointmentList from "./AppointmentList";
import ProfileImage from "./ProfileImage";
import UserDetails from "./UserDetails";
import BmiCalculator from "./BmiCalculator";
function MainProfile() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div style={{ margin: "auto" }}>
      <ScrollArea
        style={{ height: "82vh", overflowX: "hidden" }}
        offsetScrollbars
      >
        <Paper>
<Group>
          <Grid >
            <Grid.Col span={7}>
             
            
              <UserDetails />
              <BmiCalculator/>
            </Grid.Col>            
            <Grid.Col span={4}>
            
              <AppointmentList />
                        </Grid.Col>  
                        
                              
          </Grid>
          </Group>
        </Paper>
      </ScrollArea>
    </div>
  );
}

export default MainProfile;
