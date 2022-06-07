import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div>
      <div className="xl:grid xl:gap-5 xl:grid-cols-2">
        <div className="font-mono font-bold">
          <h1 className="mt-10 mb-10 font-mono text-4xl text-center text-orange-500 xl:mb-16 xl:text-5xl">
            Month Wise Sell
          </h1>
          <ResponsiveContainer width="100%" aspect="2">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#ff7f50" />
              <YAxis stroke="#ff7f50" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sell"
                stroke="#ff7f50"
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="font-mono font-bold">
          <h1 className="mt-10 mb-10 font-mono text-4xl text-center text-orange-500 xl:text-5xl xl:mb-16">
            Investment Vs Sell
          </h1>
          <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#ff7f50" />
              <YAxis stroke="#ff7f50" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stroke="#ff7f50"
                fill="#ff7f50"
                fillOpacity={0.3}
              />
              <Area
                type={"monotone"}
                dataKey="revenue"
                stroke="#ff4500"
                fill="#ff4500"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
