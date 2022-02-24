import * as React from "react";
import { useState } from "react";

import { Table, useMantineTheme, ScrollArea } from "@mantine/core";
function HospitaTextlogo() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [data, setData] = useState([]);
}

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1920} height={342} {...props}>
    <defs>
      <clipPath id="b">
        <path fill="none" d="M0 0h1802v308H0z" />
      </clipPath>
      <clipPath id="a">
        <path d="M0 0h1920v342H0z" />
      </clipPath>
    </defs>
    <g data-name="Web 1920 \u2013 1" clipPath="url(#a)">
      <path fill="#" d="M0 0h1920v342H0z" />
      <g
        data-name="Scroll Group 1"
        transform="translate(40 16)"
        clipPath="url(#b)"
        style={{
          isolation: "isolate",
        }}
      >
        <text
          data-name="Sahayak Health"
          transform="translate(901 231)"
          fill="#339af0"
          fontSize={220}
          fontFamily="Poppins-Bold, Poppins"
          fontWeight={700}
        >
          <tspan x={-900.79} y={0} fill="#000">
            {"Sahayak"}
          </tspan>
          <tspan y={0} fill="#fff" />
          <tspan y={0}>{"Health"}</tspan>
        </text>
      </g>
    </g>
  </svg>
);

export default SvgComponent;
