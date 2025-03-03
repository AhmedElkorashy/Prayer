/* eslint-disable no-unused-vars */
import style from "./Prayer.module.css";
export default function Prayer({ name, time }) {
  return (
    <div className="flex justify-between items-center prayer text-white">
      <p>{name}</p>
      <p>{time}</p>
    </div>
  );
}
