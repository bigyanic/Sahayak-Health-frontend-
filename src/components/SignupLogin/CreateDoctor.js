import React, { useState } from "react";
import Axios from "axios";
import { useForm } from "@mantine/hooks";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  ChatBubbleIcon,
  GlobeIcon,
} from "@modulz/radix-icons";
import {
  TextInput,
  PasswordInput,
  NumberInput,
  Group,
  Checkbox,
  Button,
  Paper,
  Select,
  Card,
  Text,
  ScrollArea,
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { useNavigate, useLocation } from "react-router";

export function CreateDoctor({ noShadow, noPadding, noSubmit, style }) {
  const [formType, setFormType] = useState("register");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const theme = useMantineTheme();
  const notifications = useNotifications();


  const toggleFormType = () => {
    setFormType((current) => (current === "register" ? "login" : "register"));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
      email: "",
      password: "",
      confirmpassword: "",
      address: "",
      contact_number: "",
      nationality: "",
      highest_qualification: "",
      working_hospital: "",
      license_proof: "",
      experience_years: "",
      home_visit_availability: "",
      stay_location: "",
      marital_status: "",
      working_days: "",
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === "login" || value.trim().length >= 2,
      lastName: (value) => formType === "login" || value.trim().length >= 2,
      email: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
      password: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        ),
      contact_number: (value) =>
        formType === "login" ||
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value),
      confirmpassword: (val, value) =>
        formType === "login" || val === value.pswrd,
      termsOfService: (value) => formType === "login" || /^(true)$/.test(value),
    },

    errorMessages: {
      email: "Invalid email",
      contactnumber: "Invalid Phonenumber",
      password:
        "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      confirmpassword: "Passwords don't match. Try again",
      termsOfService: "You must accept our terms",
    },
  });

  const handleSubmit = (values) => {
    setLoading(true);
    setError(null);
    // setTimeout(() => {
    //   setLoading(false);
    //   setError(
    //     formType === "register"
    //       ? "User with this email already exists"
    //       : "User with this email does not exist"
    //   );
    // }, 3000);
    if (formType === "register") {
      Axios.post("http://20.41.221.66:7000/doctor/postreg", {
        first_name: values.first_name,
        last_name: values.last_name,
        age: values.age,
        gender: values.gender,
        email: values.email,
        password: values.password,
        address: values.address,
        contact_number: values.contact_number,
        nationality: values.nationality,
        highest_qualification: values.highest_qualification,
        working_hospital: values.working_days,
        license_proof: values.license_proof,
        experience_years: values.experience_years,
        home_visit_availability: values.home_visit_availability,
        stay_location: values.stay_location,
        marital_status: values.marital_status,
        working_days: values.working_days,
      })
        .then((res) => {
          setLoading(false);
          notifications.showNotification({
            title: "Account Created",
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
    } else {
      // console.log("loginpage");
      Axios.post("http://20.41.221.66:7000/userlogin/", {
        email: values.email,
        password: values.password,
      })
        .then((res) => {
          // setLoading(false);
          console.log("loggedin", res);
        })
        .catch((err) => {
          // console.err("error", err);
          notifications.showNotification({
            title: "Login Failed",
            color: "red",
            message: "Incorrect Email or Password🤥",
          });
        });
    }
  };

  return (
    <>
      <ScrollArea
        style={{ height: "82vh", overflowX: "hidden" }}
        offsetScrollbars
      >
        <div style={{ width: 500, margin: "auto" }}>
          <Card shadow="sm" padding="lg">
            <Paper
              padding={noPadding ? 0 : "lg"}
              shadow={noShadow ? null : "sm"}
              style={{
                position: "relative",
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.white,
                ...style,
              }}
            >
              <form onSubmit={form.onSubmit(handleSubmit)}>
                {formType === "register" && (
                  <Group grow>
                    <TextInput
                      data-autofocus
                      required
                      placeholder="Your first name"
                      label="First name"
                      {...form.getInputProps("first_name")}
                    />

                    <TextInput
                      required
                      placeholder="Your last name"
                      label="Last name"
                      {...form.getInputProps("last_name")}
                    />
                  </Group>
                )}
                {formType === "register" && (
                  <Group grow>
                    <NumberInput
                      mt="md"
                      defaultValue={18}
                      placeholder="Your age"
                      label="Your age"
                      {...form.getInputProps("age")}
                      required
                    />

                    <Select
                      placeholder="Select One"
                      label="Gender"
                      mt="md"
                      required
                      data={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                        { value: "Both", label: "Both" },
                        { value: "None", label: "None" },
                      ]}
                      {...form.getInputProps("gender")}
                    />
                  </Group>
                )}
                {(formType === "register" || formType === "login") && (
                  <TextInput
                    mt="md"
                    required
                    placeholder="Your email"
                    label="Email"
                    icon={<EnvelopeClosedIcon />}
                    {...form.getInputProps("email")}
                  />
                )}
                {(formType === "register" || formType === "login") && (
                  <PasswordInput
                    mt="md"
                    required
                    placeholder="Password"
                    label="Password"
                    icon={<LockClosedIcon />}
                    onFocus={() => {
                      form.validateField("password");
                    }}
                    {...form.getInputProps("passowrd")}
                  />
                )}
                {formType === "register" && (
                  <PasswordInput
                    mt="md"
                    required
                    label="Confirm Password"
                    placeholder="Confirm password"
                    icon={<LockClosedIcon />}
                    {...form.getInputProps("confirm_password")}
                  />
                )}
                {formType === "register" && (
                  <TextInput
                    mt="md"
                    required
                    placeholder="Address"
                    label="Address"
                    icon={<EnvelopeClosedIcon />}
                    {...form.getInputProps("address")}
                  />
                )}
                {formType === "register" && (
                  <TextInput
                    mt="md"
                    required
                    placeholder="Contact Number"
                    label="Contact Number"
                    icon={<ChatBubbleIcon />}
                    {...form.getInputProps("contact_number")}
                  />
                )}
                {formType === "register" && (
                  <TextInput
                    mt="md"
                    required
                    placeholder="Nationality"
                    label="Nationality"
                    icon={<GlobeIcon />}
                    {...form.getInputProps("nationality")}
                  />
                )}
                
                {formType === "register" && (
                  <NumberInput
                    mt="md"
                    defaultValue={5}
                    placeholder="Experience (Years)"
                    label="Experience"
                    {...form.getInputProps("experience_years")}
                    required
                  />
                )}
                {formType === "register" && (
                  <Select
                    placeholder="Select One"
                    label="Home Visit Availability"
                    mt="md"
                    required
                    data={[
                      { value: "true", label: "Yes" },
                      { value: "false", label: "No" },
                    ]}
                    {...form.getInputProps("home_visit_availablity")}
                  />
                )}
                {formType === "register" && (
                  <TextInput
                    mt="md"
                    required
                    placeholder="Stay Location"
                    label="Stay Location"
                    icon={<GlobeIcon />}
                    {...form.getInputProps("stay_location")}
                  />
                )}
                {formType === "register" && (
                  <Select
                    placeholder="Select One"
                    label="Marital Status"
                    mt="md"
                    required
                    data={[
                      { value: "Married", label: "Married" },
                      { value: "Unmarried", label: "Unmarried" },
                      { value: "Divorced", label: "Divorced" },
                    ]}
                    {...form.getInputProps("marital_status")}
                  />
                )}
                 {formType === "register" && (
                  <TextInput
                    mt="md"
                    required
                    placeholder="Working Days"
                    label="Working Days"
                    icon={<GlobeIcon />}
                    {...form.getInputProps("working_days")}
                  />
                )}
                {formType === "register" && (
                  <Checkbox
                    mt="xl"
                    label="I agree to sell my soul and privacy to this corporation"
                    onFocus={() => {
                      form.validateField("termsOfService");
                    }}
                    {...form.getInputProps("termsOfService", {
                      type: "checkbox",
                    })}
                  />
                )}
                {error && (
                  <Text color="red" size="sm" mt="sm">
                    {error}
                  </Text>
                )}
                {!noSubmit && (
                  <Group position="apart" mt="xl">
                    <Anchor
                      component="button"
                      type="button"
                      color="gray"
                      onClick={toggleFormType}
                      size="sm"
                    >
                      {formType === "register"
                        ? "Have an account? Login"
                        : "Don't have an account? Register"}
                    </Anchor>

                    <Button color="blue" type="submit">
                      {formType === "register" ? "Next" : "Login"}
                    </Button>
                  </Group>
                )}
              </form>
            </Paper>
          </Card>
        </div>
      </ScrollArea>
    </>
  );
}
