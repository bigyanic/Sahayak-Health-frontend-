import {
  BackpackIcon,
  CalendarIcon,
  CameraIcon,
  HomeIcon,
  QuestionMarkCircledIcon,
  RocketIcon,
  TableIcon,
} from "@modulz/radix-icons";
import {
  Bus, Stethoscope
} from 'tabler-icons-react';
const TABS = [
  {
    key: "home",
    label: "Homepage",
    icon: <HomeIcon />,
  },
  {
    key: "viz",
    label: "Data Visualization",
    icon: <CameraIcon />,
  },
  {
    key: "faq",
    label: "FAQ",
    icon: <QuestionMarkCircledIcon />,
  },
  {
    key: "hospitals",
    label: "Hospitals List",
    icon: <TableIcon />,
  },
  {
    key: "news",
    label: "News",
    icon: <RocketIcon />,
  },
  {
    key: "ambulance",
    label: "Ambulance",
    icon: <Bus />,
  },
  {
    key: "appointment",
    label: "Appointment",
    icon: <CalendarIcon />,
  },
  {
    key: "docList",
    label: "Doctors in Nepal",
    icon: <Stethoscope />,
  }
  // {
  //   key: "createuser",
  //   label: "USER",
  //   icon: <CalendarIcon />,
  // },
];

export default TABS;
