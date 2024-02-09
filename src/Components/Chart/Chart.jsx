import React, { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./Chart.css";

import { darkmoodContext } from "../../Contexts/darkmood";

export default function Chart({ title, data, grid, datakey }) {
  // Extracting keys from the first data point for X-axis
  const keys = Object.keys(data[0]).filter((key) => key !== "username");

  console.log(keys);

  const {darkMood , setDarkMood} = useContext(darkmoodContext)

  return (
    <>
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer aspect={4}>
          <LineChart data={data}>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />
            <XAxis dataKey="name" stroke={` ${darkMood ? '#fff' : '#5550bd'}` }/>
            <YAxis stroke={` ${darkMood ? '#fff' : '#5550bd'}` }/>
            <Tooltip />
            {keys.map((key, index) => (
              <Line key={index} type="monotone" dataKey={key} fill={` ${darkMood ? '#fff' : '#5550bd'}`} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
