// Leaderboard.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const yourUsername = "Hala Madrid 1536"; // This should ideally come from auth

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
    <main className="min-h-screen bg-gradient-to-tr from-purple-50 to-indigo-100 text-gray-800">
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <img src="/ipl-logo.png" alt="IPL 2025" className="h-24 mx-auto drop-shadow-md" />
          <h1 className="text-5xl font-extrabold text-indigo-800 mt-2">
            DREAMAUTH CHAMPIONSHIP - 2025
          </h1>
          <p className="text-red-600 italic mt-2">
            📌 Mode 3 will be updated at the end of the IPL season
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search for your team..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-indigo-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            />
          </div>
        </div>

        {/* Tab Strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-indigo-700 rounded-full px-6 py-2 flex gap-4 text-white shadow-md text-sm font-medium">
            {["Mode 2", "Mode 4", "Mode 5", "Mode 6", "Mode 7", "Mode 8", "Total"].map((mode) => (
              <span key={mode} className="cursor-default">{mode}</span>
            ))}
          </div>
        </motion.div>

        {/* Table */}
        <div className="rounded-2xl overflow-x-auto border border-indigo-300 shadow-xl bg-white">
          <table className="w-full min-w-[1200px] text-sm">
            <thead className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
              <tr>
                <th className="p-4 text-xs text-center uppercase">#</th>
                <th className="p-4 text-xs text-left uppercase">Username</th>
                <th className="p-4 text-xs text-center uppercase">Mode 1</th>
                <th className="p-4 text-xs text-center uppercase">Mode 2</th>
                <th className="p-4 text-xs text-center uppercase">Mode 4</th>
                <th className="p-4 text-xs text-center uppercase">Mode 5</th>
                <th className="p-4 text-xs text-center uppercase">Mode 6</th>
                <th className="p-4 text-xs text-center uppercase">Mode 7</th>
                <th className="p-4 text-xs text-center uppercase">Mode 8</th>
                <th className="p-4 text-xs text-right uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.map((user, i) => (
                <tr
                  key={user.username}
                  className={cn(
                    "transition-colors duration-200 hover:bg-indigo-50",
                    {
                      "bg-yellow-100 font-semibold": i === 0,
                      "bg-white": i % 2 === 0,
                      "bg-gray-50": i % 2 !== 0,
                      "text-indigo-800 font-bold": user.username === yourUsername
                    }
                  )}
                >
                  <td className="p-4 text-center font-semibold">{i + 1}</td>
                  <td className="p-4 font-medium">
                    {user.username}
                    {user.username === yourUsername && (
                      <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">You</span>
                    )}
                  </td>
                  <td className="p-4 text-center">{user.mode1 > 0 ? `₹${user.mode1}` : "-"}</td>
                  <td className="p-4 text-center">{user.mode2 > 0 ? `₹${user.mode2}` : "-"}</td>
                  <td className="p-4 text-center font-mono">
                    <span className="text-blue-700">{user.mode4_points} pts</span>
                    <span className="text-amber-600"> / ₹{user.mode4_winnings}</span>
                  </td>
                  <td className="p-4 text-center">{user.mode5 > 0 ? `₹${user.mode5}` : "-"}</td>
                  <td className="p-4 text-center">{user.mode6 > 0 ? `₹${user.mode6}` : "-"}</td>
                  <td className="p-4 text-center font-mono">
                    <span className="text-blue-700">{user.mode7_points} pts</span>
                    <span className="text-amber-600"> / ₹{user.mode7_winnings}</span>
                  </td>
                  <td className="p-4 text-center text-amber-600 font-semibold">
                    ₹{user.mode8_winnings}
                  </td>
                  <td className="p-4 text-right font-bold text-indigo-800 text-base">
                    ₹{user.total.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          ⚡ Updated after each match • Built by your friendly fantasy admin 😎
        </div>
      </div>
    </main>
  );
}
