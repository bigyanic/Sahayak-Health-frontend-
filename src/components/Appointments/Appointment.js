import { React, useState } from "react";
import {
  Card,
  Space,
  Title,
  Select,
  Button,
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
import { Calendar, Clock } from "tabler-icons-react";

import { useNotifications } from "@mantine/notifications";
import { DatePicker, TimeInput } from "@mantine/dates";

import { useNavigate, useLocation } from "react-router";

import Dropzone from "./DropZone";
import Axios from "axios";

function Appointment() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const notifications = useNotifications();
  const navigate = new useNavigate();

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      age: 23,
      patient_email: "",
      patient_address: "",
      gender: "",
      contact_number: "",
      hospital: "",
      department: "",
      date: "",
      time: "",
      previous_reports: "",
    },

    validationRules: {
      firstname: (value) => value.trim().length >= 2,
      lastname: (value) => value.trim().length >= 2,
      patient_email: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),

      contact_number: (value) =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value),
    },

    errorMessages: {
      patient_email: "Invalid email",
      contact_number: "Invalid Phonenumber",
    },
  });
  const handleSubmit = (values) => {
    setLoading(true);

    setError(null);
    Axios.post("http://20.41.221.66:7000/patient/postapp/", {
      firstname: values.firstname,
      lastname: values.lastname,
      age: values.age,
      patient_email: values.patient_email,
      patient_address: values.patient_address,
      gender: values.gender,
      contact_number: values.contact_number,
      hospital: values.hospital,
      department: values.department,
      date: values.date,
      time: values.time,
      previous_reports: values.previous_reports,
    })
      .then((res) => {
        setLoading(false);
        notifications.showNotification({
          title: "Appointment booked",
          message: "You can login to your account now",
        });

        console.log("created", res);
      })
      .catch((err) => {
        notifications.showNotification({
          title: "Account Creation Failed",
          color: "red",
          message: "Maybe you already have an account, use different email",
        });
        console.error(err);
      });
  };

  return (
    <>
      <ScrollArea
        style={{ height: "82vh", overflowX: "hidden" }}
        offsetScrollbars
      >
        <div style={{ width: 900, margin: "auto" }}>
          <Title order={1} align="center">
            Hospital Appointment Booking
          </Title>
          <Space h="" />

          <Card shadow="sm" padding="lg">
            <Title order={3}>Basic Details</Title>
            <Space h="md" />

            <form onSubmit={form.onSubmit(handleSubmit)}>
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
                    {...form.getInputProps("patient_email")}
                  />
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                  <TextInput
                    mt="md"
                    required
                    placeholder="Address"
                    label="Address"
                    icon={<HomeIcon />}
                    {...form.getInputProps("patient_address")}
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
                    {...form.getInputProps("gender")}
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
                    {...form.getInputProps("contact_number")}
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
                    {...form.getInputProps("hospital")}
                  />
                </Grid.Col>
                <Grid.Col md={6} lg={2}>
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
                    {...form.getInputProps("department")}
                  />
                </Grid.Col>
                <Grid.Col md={6} lg={1}>
                  <DatePicker
                    mt="md"
                    placeholder="Pick date"
                    label="Event date"
                    icon={<Calendar size={16} />}
                    {...form.getInputProps("date")}
                  />
                </Grid.Col>

                <Grid.Col md={6} lg={1}>
                  <TimeInput
                    mt="md"
                    label="Pick time"
                    placeholder="Pick time"
                    icon={<Clock size={16} />}
                    defaultValue={new Date()}
                    {...form.getInputProps("time")}
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
                  <Dropzone {...form.getInputProps("previous_reports")} />
                </Grid.Col>
              </Grid>
              <Grid>
                <Button
                  variant="gradient"
                  type="submit"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Book Appointment
                </Button>
              </Grid>
            </form>
          </Card>
        </div>
      </ScrollArea>
    </>
  );
}

export default Appointment;
