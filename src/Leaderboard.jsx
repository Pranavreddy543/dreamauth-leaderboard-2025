
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

  const filtered = data
    .filter(user => user.username.toLowerCase() !== "inamitables")
    .map(user => ({
      ...user,
      username: user.username.replace(/\s*you\b/i, "")
    }))
    .filter(user => user.username.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="p-8 max-w-[1400px] mx-auto text-gray-800 bg-gradient-to-br from-purple-100 via-white to-indigo-100 min-h-screen">
      <div className="text-center mb-6">
        <div className="flex justify-center">
          <img src="/ipl-logo.png" alt="IPL 2025" className="h-24 drop-shadow-lg rounded-xl" />
        </div>
        <h1 className="text-5xl font-extrabold text-center text-indigo-800 tracking-wide mt-2">
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
          className="w-full max-w-md px-4 py-2 border rounded-full border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-md"
        />
      </div>

      <div className="rounded-xl bg-white shadow-2xl border border-indigo-300 overflow-x-auto">
        <table className="w-full min-w-[1300px] table-fixed border-collapse border border-gray-300">
          <thead className="bg-indigo-700 text-white">
            <tr className="text-sm">
              <th className="p-3 border border-white text-center">#</th>
              <th className="p-3 border border-white text-left">Username</th>
              <th className="p-3 border border-white text-center">Mode 1</th>
              <th className="p-3 border border-white text-center">Mode 2</th>
              <th className="p-3 border border-white text-center">Mode 4</th>
              <th className="p-3 border border-white text-center">Mode 5</th>
              <th className="p-3 border border-white text-center">Mode 6</th>
              <th className="p-3 border border-white text-center">Mode 7</th>
              <th className="p-3 border border-white text-center">Mode 8</th>
              <th className="p-3 border border-white text-right">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300 text-sm leading-6">
            {filtered.map((user, i) => (
              <tr
                key={user.username}
                className={cn("text-sm", {
                  "bg-yellow-50 font-semibold": i === 0,
                  "bg-white": i % 2 === 0,
                  "bg-gray-50": i % 2 !== 0
                })}
              >
                <td className="p-3 text-center border border-gray-300">{i + 1}</td>
                <td className="p-3 whitespace-nowrap border border-gray-300">{user.username}</td>
                <td className="p-3 text-center border border-gray-300">
                  {user.mode1 > 0 ? `₹${user.mode1}` : "-"}
                </td>
                <td className="p-3 text-center border border-gray-300">
                  {user.mode2 > 0 ? `₹${user.mode2}` : "-"}
                </td>
                <td className="p-3 text-center border border-gray-300 font-mono">
                  <span className="text-blue-700">{user.mode4_points} pts</span>
                  <span className="text-amber-600"> / ₹{user.mode4_winnings}</span>
                </td>
                <td className="p-3 text-center border border-gray-300">
                  {user.mode5 > 0 ? `₹${user.mode5}` : "-"}
                </td>
                <td className="p-3 text-center border border-gray-300">
                  {user.mode6 > 0 ? `₹${user.mode6}` : "-"}
                </td>
                <td className="p-3 text-center border border-gray-300 font-mono">
                  <span className="text-blue-700">{user.mode7_points} pts</span>
                  <span className="text-amber-600"> / ₹{user.mode7_winnings}</span>
                </td>
                <td className="p-3 text-center border border-gray-300 text-amber-600 font-semibold">
                  ₹{user.mode8_winnings}
                </td>
                <td className="p-3 text-right border border-gray-300 text-indigo-800 font-bold text-base bg-indigo-50">
                  ₹{user.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        ⚡ Updated after each match • Built by your friendly fantasy admin 😎
      </div>
    </main>
  );
}
