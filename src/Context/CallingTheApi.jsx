import axios from "axios";
import { createContext, useState } from "react";

export const CallingTheApi = createContext();
export default function CallingTheApiProvider({ children }) {
  let [CityTime, setCityTime] = useState("");
  async function GetTheData() {
    return await axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity/03-09-2024?city=Eg&country=${
          CityTime != null ? CityTime : "cairo"
        }`
      )
      .then((res) => res.data)
      .catch((err) => err.message);
  }

  return (
    <CallingTheApi.Provider value={{ GetTheData, setCityTime, CityTime }}>
      {children}
    </CallingTheApi.Provider>
  );
}
