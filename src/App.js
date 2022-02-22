import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { React } from "react";
import Chatbot from "./components/Chatbot";
import AppBody from "./components/AppBody";
import { NotificationsProvider } from "@mantine/notifications";

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
          <AppBody />
          <Chatbot />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
