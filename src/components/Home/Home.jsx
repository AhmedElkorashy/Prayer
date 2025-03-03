/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./Home.module.css";
import Prayer from "../Prayer/Prayer";
import { CallingTheApi } from "../../Context/CallingTheApi";

export default function Home() {
  let [dataTime, setDataTime] = useState([]);
  let [Date, setDate] = useState();
  let { GetTheData, CityTime, setCityTime } = useContext(CallingTheApi);
  async function GettingTheData() {
    let res = await GetTheData(CityTime);
    setDataTime(res?.data.timings);
    setDate(res?.data.date?.gregorian?.date);
    console.log(res?.data.date?.gregorian?.date);
  }
  const Cities = [
    { name: "القاهره", value: "cairo" },
    { name: "الاسكندرية", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "الاقصر", value: "Luxor" },
    { name: "اسوان", value: "Aswan" },
  ];
  useEffect(() => {
    GettingTheData();
  }, [CityTime]);
  return (
    <>
      <section className="bg-[url(./assets/bg.jpg)]  bg-center bg-cover flex items-center justify-center">
        <div className="container md:w-[50%] w-[95%] mx-auto bg-[#332a224e] backdrop-sepia-0 ">
          <div className="top-section flex justify-around items-center flex-wrap">
            <div className="city md:w-[50%] w-full">
              <h3>المدينة</h3>
              <select
                className="md:w-8/12 w-full"
                name="city"
                id=""
                onChange={(e) => setCityTime(e.target.value)}
              >
                <option selected disabled>
                  choose
                </option>
                {Cities.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="date md:w-4/12 w-full">
              <h3>التاريخ</h3>
              <h4>{Date}</h4>
            </div>
          </div>
          <Prayer name={"الفجر:"} time={dataTime?.Fajr} />
          <Prayer name={"الظهر:"} time={dataTime?.Dhuhr} />
          <Prayer name={"العصر:"} time={dataTime?.Asr} />
          <Prayer name={"المغرب:"} time={dataTime?.Maghrib} />
          <Prayer name={"العشاء:"} time={dataTime?.Isha} />
        </div>
      </section>
    </>
  );
}
