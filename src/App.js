import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { React } from "react";
import Chatbot from "./components/Chatbot/Chatbot";
import Routes from "./components/Routes";
import { NotificationsProvider } from "@mantine/notifications";

import { ModalsProvider } from "@mantine/modals";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: "color-scheme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, fontFamily: "Poppins" }}
        withGlobalStyles
      >
        <NotificationsProvider>
          <ModalsProvider>
            <Routes />
            <Chatbot />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
