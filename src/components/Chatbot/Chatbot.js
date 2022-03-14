import React, { useState, useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { Widget, addResponseMessage, setQuickButtons } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

import axios from "axios";
const Chatbot = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const buttons = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  useEffect(() => {
    addResponseMessage("Hello");

    setQuickButtons(buttons);
    //
  }, [1]);

  // const [data, setData] = useState([]);
  const handleNewUserMessage = async (newMessage,buttons, data) => {
    console.log(`New message incoming! ${newMessage}`);
    console.log(`New message incoming! ${buttons}`);

  // Now send the message throught the backend API
    const message = {
      
      message: `${newMessage}`||`${buttons}`,
    };
    const res = await axios.post(
      "http://20.41.221.66:5005/webhooks/rest/webhook",
      message
    );
    console.log(res.data);
    res.data.forEach((item) => {
      addResponseMessage(item.text);
    });
  };

  return (
    <div className="App">
      <Widget
        title={"Chat With Sahayak"}
        subtitle={"AI Powered Health Bot"}
        handleNewUserMessage={(message) => handleNewUserMessage(message)}
        emojis={false}
        showTimeStamp={false}
        // resizable={true}
      />
    </div>
  );
};

export default Chatbot;
