import { React, useState } from "react";
import { Stepper } from "@mantine/core";

import {
  UserCheck,
  MailOpened,
  ShieldCheck,
  CircleCheck,
} from "tabler-icons-react";

function CreateUserSteps() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Stepper
        classNames={{
          root: "your-root-class",
          steps: "your-steps-class",
          separator: "your-separator-class",
        }}
        active={active}
        onStepClick={setActive}
        completedIcon={<CircleCheck />}
      >
        <Stepper.Step
          icon={<UserCheck size={18} />}
          label="Step 1"
          description="Create an account"
        />
        <Stepper.Step
          icon={<MailOpened size={18} />}
          label="Step 2"
          description="Verify email"
        />
        <Stepper.Step
          icon={<ShieldCheck size={18} />}
          label="Step 3"
          description="Get full access"
        />
      </Stepper>
    </div>
  );
}

export default CreateUserSteps;
