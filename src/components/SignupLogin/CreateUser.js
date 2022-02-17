import React, { useState } from "react";
import { useForm } from "@mantine/hooks";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  ChatBubbleIcon,
  CalendarIcon,
} from "@modulz/radix-icons";
import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Paper,
  Card,
  Text,
  LoadingOverlay,
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
// export interface AuthenticationFormProps {
//   noShadow?: boolean;
//   noPadding?: boolean;
//   noSubmit?: boolean;
//   style?: React.CSSProperties;
// }

export function AuthenticationForm({ noShadow, noPadding, noSubmit, style }) {
  const [formType, setFormType] = useState("register");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const theme = useMantineTheme();

  const toggleFormType = () => {
    setFormType((current) => (current === "register" ? "login" : "register"));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      pswrd: "",
      confirmPassword: "",
      address: "",
      phonenumber: "",
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === "login" || value.trim().length >= 2,
      lastName: (value) => formType === "login" || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      pswrd: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        ),
      phonenumber: (value) => /(?:\+977[- ])?\d{2}-?\d{7,8}/.test(value),
      confirmPassword: (val, value) =>
        formType === "login" || val === value.pswrd,
    },

    errorMessages: {
      email: "Invalid email",
      phonenumber: "Invalid Phonenumber",
      pswrd:
        "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError(
        formType === "register"
          ? "User with this email already exists"
          : "User with this email does not exist"
      );
    }, 3000);
  };

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <Card shadow="sm" padding="lg">
        <Paper
          padding={noPadding ? 0 : "lg"}
          shadow={noShadow ? null : "sm"}
          style={{
            position: "relative",
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
            ...style,
          }}
        >
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <LoadingOverlay visible={loading} />
            {formType === "register" && (
              <Group grow>
                <TextInput
                  data-autofocus
                  required
                  placeholder="Your first name"
                  label="First name"
                  {...form.getInputProps("firstName")}
                />

                <TextInput
                  required
                  placeholder="Your last name"
                  label="Last name"
                  {...form.getInputProps("lastName")}
                />
              </Group>
            )}

            <TextInput
              mt="md"
              required
              placeholder="Your email"
              label="Email"
              icon={<EnvelopeClosedIcon />}
              {...form.getInputProps("email")}
            />

            <PasswordInput
              mt="md"
              required
              placeholder="Password"
              label="Password"
              icon={<LockClosedIcon />}
              {...form.getInputProps("pswrd")}
            />

            {formType === "register" && (
              <PasswordInput
                mt="md"
                required
                label="Confirm Password"
                placeholder="Confirm password"
                icon={<LockClosedIcon />}
                {...form.getInputProps("confirmPassword")}
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
              <DatePicker
                mt="md"
                placeholder="Pick date"
                icon={<CalendarIcon />}
                label="Date of Birth"
                required
              />
            )}
            {formType === "register" && (
              <TextInput
                mt="md"
                required
                placeholder="Contact Number"
                label="Contact Number"
                icon={<ChatBubbleIcon />}
                {...form.getInputProps("phonenumber")}
              />
            )}
            {formType === "register" && (
              <Checkbox
                mt="xl"
                label="I agree to sell my soul and privacy to this corporation"
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
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
                  {formType === "register" ? "Register" : "Login"}
                </Button>
              </Group>
            )}
          </form>
        </Paper>
      </Card>
    </div>
  );
}
