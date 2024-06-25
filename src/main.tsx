
import ReactDOM from "react-dom/client";
import  { useEffect, useState, Suspense } from "react";
import "./i18n";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css"; 
import LoadingScreen from "./Components/loadingScreen/LoadingScreen.tsx";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      offset: 200, 
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
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
