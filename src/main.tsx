
import { MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom/client";
import  { useEffect, useState, Suspense } from "react";
import "./i18n";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";
import App from "./App";
import { theme } from "./theme.ts";
import LoadingScreen from "./Components/loadingScreen/LoadingScreen.tsx";


const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider theme={theme}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      )}
    </MantineProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
