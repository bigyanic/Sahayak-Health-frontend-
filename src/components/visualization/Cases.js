import React, { useEffect, useState } from "react";
import axios from "axios";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";
import { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Card } from "@mantine/core";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([10000, 10000000])
  .range(["#ffedea", "#ff5233"]);

// find minimum

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    axios(`https://corona.lmao.ninja/v2/countries`).then((data) => {
      setData(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 800, margin: "auto" }}>
        <Card shadow="sm" padding="lg">
          <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find(
                    (s) => s.countryInfo.iso3 === geo.properties.ISO_A3
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={d ? colorScale(d["cases"]) : "#F5F4F6"}
                      onClick={null}
                      style={{
                        pressed: {
                          fill: d ? colorScale(d["cases"]) : "#F5F4F6",
                          stroke: "none",
                        },
                      }}
                      onMouseEnter={() => {
                        const { NAME, POP_EST } = geo.properties;
                        setContent(`${NAME} — ${d["cases"]}`);
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          <ReactTooltip>{content}</ReactTooltip>
        </Card>
      </div>
    </div>
  );
};

export default memo(MapChart);
