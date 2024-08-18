// App.js
import React, { useState, useEffect } from "react";
import SplashScreen from "./splashScreen/splashScreen";
import Console from "./console";
import { Landing } from "..";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API call or data fetching)
    const fetchData = async () => {
      // Your initialization logic here

      // Simulate a delay (remove this in your actual implementation)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set loading to false when initialization is complete
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

  return <>{loading ? <SplashScreen /> : <Landing />}</>;
};

export default App;
