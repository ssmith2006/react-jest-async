import { useEffect, useState } from "react";

export default function Api() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      const res = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=2471c7a760c74a79a4500817252703&q=Baton Rouge, LA&days=1&aqi=no&alerts=no"
      );
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("Failed to retrieve data from Weather App.");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
  <div>
    <h1>Weather Api</h1>

    </div>
)}
