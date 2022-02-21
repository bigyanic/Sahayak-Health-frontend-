import { React, useState } from "react";
import {
  Card,
  Space,
  Title,
  Select,
  TextInput,
  useMantineTheme,
  NumberInput,
  ScrollArea,
  Grid,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import {
  EnvelopeClosedIcon,
  HomeIcon,
  ChatBubbleIcon,
} from "@modulz/radix-icons";
import Dropzone from "./DropZone";
import Axios from "axios";

function Appointment() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [error, setError] = useState(null);
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",

      age: 23,
      email: "",
      address: "",
      phonenumber: "",
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => value.trim().length >= 2,
      lastName: (value) => value.trim().length >= 2,
      email: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),

      phonenumber: (value) =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value),

      termsOfService: (value) => /^(true)$/.test(value),
    },

    errorMessages: {
      email: "Invalid email",
      phonenumber: "Invalid Phonenumber",
      termsOfService: "You must accept our terms",
    },
  });

  return (
    <div style={{ width: 900, margin: "auto" }}>
      <ScrollArea
        style={{ height: "82vh", overflowX: "hidden" }}
        offsetScrollbars
      >
        <Title order={1} align="center">
          Hospital Appointment Booking
        </Title>
        <Space h="" />

        <Card shadow="sm" padding="lg">
          <Title order={3}>Basic Details</Title>
          <Space h="md" />

          <form>
            <Grid grow>
              <Grid.Col md={6} lg={4}>
                <TextInput
                  data-autofocus
                  required
                  placeholder="Your first name"
                  label="First name"
                  {...form.getInputProps("firstName")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={4}>
                <TextInput
                  required
                  placeholder="Your last name"
                  label="Last name"
                  {...form.getInputProps("lastName")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={1}>
                <NumberInput
                  placeholder="Your age"
                  label="Your age"
                  {...form.getInputProps("age")}
                  required
                />
              </Grid.Col>
            </Grid>
            <Space h="md" />
            <Grid grow>
              <Grid.Col md={6} lg={3}>
                <TextInput
                  mt="md"
                  required
                  placeholder="Your email"
                  label="Email"
                  icon={<EnvelopeClosedIcon />}
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <TextInput
                  mt="md"
                  required
                  placeholder="Address"
                  label="Address"
                  icon={<HomeIcon />}
                  {...form.getInputProps("address")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={1}>
                <Select
                  placeholder="Select One"
                  label="Gender"
                  mt="md"
                  required
                  data={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "both", label: "Both" },
                    { value: "none", label: "None" },
                  ]}
                />
              </Grid.Col>
            </Grid>
            <Space h="md" />
            <Grid>
              <Grid.Col md={6} lg={3}>
                <TextInput
                  mt="md"
                  required
                  placeholder="Contact Number"
                  label="Contact Number"
                  icon={<ChatBubbleIcon />}
                  {...form.getInputProps("contactnumber")}
                />
              </Grid.Col>
            </Grid>
          </form>
        </Card>
        <Space h="sm" />
        <Card shadow="sm" padding="lg">
          <Title order={3}>Appointment Details</Title>
          <Space h="md" />

          <form>
            <Grid grow>
              <Grid.Col md={6} lg={3}>
                <Select
                  placeholder="Select One"
                  label="Hospital"
                  mt="md"
                  required
                  data={[
                    { value: "one", label: "Gandaki Regional Hospital" },
                    { value: "two", label: "Manipal Teaching Hospital" },
                    { value: "three", label: "" },
                    { value: "four", label: "None" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <Select
                  placeholder="Select One"
                  label="Department"
                  mt="md"
                  required
                  data={[
                    { value: "ent", label: "ENT" },
                    { value: "mental", label: "Mental" },
                    { value: "general", label: "General" },
                    { value: "childdisease", label: "Chlid Disease" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <Select
                  placeholder="Select One"
                  label="Doctor"
                  mt="md"
                  required
                  data={[
                    { value: "male", label: "Makka Madina" },
                    { value: "female", label: "Bigyan Prasad" },
                    { value: "both", label: "Bishab Kumar" },
                    { value: "none", label: "Gannu Kaka" },
                  ]}
                />
              </Grid.Col>
            </Grid>

            <Space h="xl" />

            <Grid grow>
              <Grid.Col md={6} lg={3}>
                <Title order={3} align="center">
                  If you have any previous report and complications
                  <Space h="sm" />
                </Title>
                <Dropzone />
              </Grid.Col>
            </Grid>
          </form>
        </Card>
      </ScrollArea>
    </div>
  );
}

export default Appointment;
