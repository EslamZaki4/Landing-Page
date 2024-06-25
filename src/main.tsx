
import ReactDOM from "react-dom/client";
import  { useEffect, useState, Suspense } from "react";
import "./i18n";
import "./index.css";
import App from "./App";

import LoadingScreen from "./Components/loadingScreen/LoadingScreen.tsx";


const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      )}
   </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
