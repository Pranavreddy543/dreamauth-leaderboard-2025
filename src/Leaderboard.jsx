import React, { useEffect, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/currently_winnings.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const filtered = data.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-6 max-w-screen-2xl mx-auto text-gray-800 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="text-center mb-6">
        <div className="flex justify-center">
          <img
            src="/ipl-logo.png"
            alt="IPL 2025"
            className="h-24 drop-shadow-md"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 tracking-wide">
          DREAMAUTH CHAMPIONSHIP - 2025
        </h1>
        <div className="text-center text-sm text-red-600 italic mt-2">
          📌 Mode 3 will be updated at the end of the IPL season
        </div>
      </div>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search for your team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-md border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm"
        />
      </div>

      <div className="shadow-xl border border-indigo-300 rounded-xl overflow-x-auto p-0">
        <table className="w-full min-w-[1400px] text-sm text-left border-collapse table-fixed">
          <colgroup>
            <col style={{ width: "50px" }} />
            <col style={{ width: "160px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "160px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "160px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "120px" }} />
          </colgroup>
          <thead className="bg-indigo-600 text-white uppercase text-xs font-semibold">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Username</th>
              <th className="p-3 text-center">Mode 1</th>
              <th className="p-3 text-center">Mode 2</th>
              <th className="p-3 text-center">Mode 4</th>
              <th className="p-3 text-center">Mode 5</th>
              <th className="p-3 text-center">Mode 6</th>
              <th className="p-3 text-center">Mode 7</th>
              <th className="p-3 text-center">Mode 8</th>
              <th className="p-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user, i) => (
              <tr
                key={user.username}
                className={cn("transition-all", {
                  "bg-yellow-100 font-semibold": i === 0,
                  "bg-indigo-50": i % 2 !== 0,
                  "bg-white": i % 2 === 0 && i !== 0
                })}
              >
                <td className="p-3 text-center">{i + 1}</td>
                <td className="p-3 whitespace-nowrap">{user.username}</td>
                <td className="p-3 text-center">
                  {user.mode1 > 0 ? `₹${user.mode1}` : "-"}
                </td>
                <td className="p-3 text-center">
                  {user.mode2 > 0 ? `₹${user.mode2}` : "-"}
                </td>
                <td className="p-3 text-center">
  <span className="font-mono">
    <span className="text-blue-700">{user.mode4_points} pts</span>
    <span className="text-amber-600"> / ₹{user.mode4_winnings}</span>
  </span>
</td>
                <td className="p-3 text-center">
                  {user.mode5 > 0 ? `₹${user.mode5}` : "-"}
                </td>
                <td className="p-3 text-center">
                  {user.mode6 > 0 ? `₹${user.mode6}` : "-"}
                </td>
                <td className="p-3 text-center">
  <span className="font-mono">
    <span className="text-blue-700">{user.mode7_points} pts</span>
    <span className="text-amber-600"> / ₹{user.mode7_winnings}</span>
  </span>
</td>
                <td className="p-3 text-center">
                  {`₹${user.mode8_winnings}`}
                </td>
                <td className="p-3 text-right font-bold text-indigo-700">
                  ₹{user.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        ⚡ Updated after each match • Built by your friendly fantasy admin 😎
      </div>
    </main>
  );
}
