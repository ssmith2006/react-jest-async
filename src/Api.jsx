import { useEffect, useState } from "react";

export default function Api() {
  const [weatherData, setWeatherData] = useState({});
  const [input, setInput] = useState([]);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getData(query) {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`
      );

      if (res.status !== 200) {
        throw new Error("Invalid City Name");
      }
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      setWeatherData({});
    }
  }

  useEffect(() => {
    getData("70816");
  }, []);

  return (
    <div>
      <h1>Weather API App</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <input
          type="text"
          value={input}
          placeholder="Search Your City"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => getData(input)}>Search</button>
        <h2>{weatherData.location ? `${weatherData.location.name}` : ""}</h2>
        <p>
          <strong>Temp: </strong>
          {weatherData.current?.temp_f}
        </p>
        <p>
          <strong>Condition: </strong>
          {weatherData.current?.condition?.text}{" "}
        </p>
      </div>
    </div>
  );
}
