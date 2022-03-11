import React from 'react'
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

function DoctorViewAppointment() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];
  
    return (
      <div style={{ width: 340, margin: 'auto' }}>
        <Card shadow="sm" p="lg">
          
  
          <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text weight={500}>Norway Fjord Adventures</Text>
            
          </Group>
  
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>
  
          <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            
          <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
            Book classic tour now
          </Button>
          
          </Group>
          
        </Card>
      </div>
    );
  
}

export default DoctorViewAppointment