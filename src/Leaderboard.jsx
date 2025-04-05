import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';



const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function Leaderboard() {
  const ultimateTeams = {
    "Pujan Xi 348432": [
    "Axar Patel (C)",
    "Virat Kohli (VC)",
    "Travis Head",
    "Abhishek Sharma",
    "Sunil Narine",
    "Ruturaj Gaikwad",
    "Riyan Parag",
    "Prabhsimran Singh",
    "Trent Boult",
    "Varun Chakravarthy",
    "Rashid-Khan"
  ],
  "Pitch Slappers": [
    "Virat Kohli (C)",
    "Varun Chakravarthy (VC)",
    "Angkrish Raghuvanshi",
    "Yashasvi Jaiswal",
    "Travis Head",
    "Harshit Rana",
    "Pat Cummins",
    "Abhishek Sharma",
    "Axar Patel",
    "Hardik Pandya",
    "Sanju Samson"
  ],
  "Aryan Akhouri": [
    "Abhishek Sharma (C)",
    "Shubman Gill (VC)",
    "Virat Kohli",
    "Matheesha Pathirana",
    "Lokesh Rahul",
    "Jasprit Bumrah",
    "Heinrich Klaasen",
    "Tilak Varma",
    "Yuzvendra Chahal",
    "Nehal Wadhera",
    "Sunil Narine"
  ],
  "Animesh Eaters": [
    "Virat Kohli (C)",
    "Rashid-Khan (VC)",
    "Jos Buttler",
    "Shubman Gill",
    "Yashasvi Jaiswal",
    "Shashank Singh",
    "Ravindra Jadeja",
    "Hardik Pandya",
    "Glenn Maxwell",
    "Mohammed Shami",
    "Yuzvendra Chahal"
  ],
  "Kajal Champs": [
    "Arshdeep Singh (C)",
    "Yashasvi Jaiswal (VC)",
    "Quinton de Kock",
    "Rishabh Pant",
    "Travis Head",
    "Shubman Gill",
    "Axar Patel",
    "Hardik Pandya",
    "Yash Dayal",
    "Varun Chakravarthy",
    "Noor Ahmad"
  ],
  "Kingsmen Bros": [
    "Travis Head (C)",
    "Virat Kohli (VC)",
    "Ruturaj Gaikwad",
    "Abhishek Sharma",
    "Shubman Gill",
    "Philip Salt",
    "Tilak Varma",
    "Sunil Narine",
    "Mohammed Shami",
    "Varun Chakravarthy",
    "Rasikh Salam"
  ],
  "Saikat Moi": [
    "Shubman Gill (C)",
    "Ruturaj Gaikwad (VC)",
    "Philip Salt",
    "Virat Kohli",
    "Yashasvi Jaiswal",
    "Ravindra Jadeja",
    "Mohammed Siraj",
    "Rashid-Khan",
    "Jofra Archer",
    "Rinku Singh",
    "Ayush Badoni"
  ],
  "Sajal Team 1043991": [
    "Virat Kohli (C)",
    "Hardik Pandya (VC)",
    "Shubman Gill",
    "Suryakumar Yadav",
    "Travis Head",
    "Jos Buttler",
    "Sam Curran",
    "Sunil Narine",
    "Varun Chakravarthy",
    "Jasprit Bumrah",
    "Rasikh Salam"
  ],
  "Jatin Ramchandani": [
    "Rohit Sharma (C)",
    "Hardik Pandya (VC)",
    "Andre Russell",
    "Vaibhav Suryavanshi",
    "Yuzvendra Chahal",
    "Shubman Gill",
    "Ruturaj Gaikwad",
    "Virat Kohli",
    "Bhuvneshwar Kumar",
    "Varun Chakravarthy",
    "Lokesh Rahul"
  ],
  "Sparntans11": [
    "Virat Kohli (C)",
    "Sunil Narine (VC)",
    "Rashid-Khan",
    "Rishabh Pant",
    "Travis Head",
    "Rachin Ravindra",
    "Shubman Gill",
    "Mohammed Shami",
    "Ruturaj Gaikwad",
    "Varun Chakravarthy"
  ],
  "Hala Madrid 1536": [
    "Yashasvi Jaiswal (C)",
    "Tilak Varma (VC)",
    "Travis Head",
    "Virat Kohli",
    "Sai Sudharsan",
    "Philip Salt",
    "Hardik Pandya",
    "Sunil Narine",
    "Pat Cummins",
    "Varun Chakravarthy",
    "Rasikh Salam"
  ],
  "My Noob 11": [
    "Sai Sudharsan (C)",
    "Harshal Patel (VC)",
    "Anshul Kamboj",
    "Jake Fraser-McGurk",
    "Ruturaj Gaikwad",
    "Axar Patel",
    "Varun Chakravarthy",
    "Virat Kohli",
    "Marcus Stoinis",
    "Yashasvi Jaiswal",
    "Quinton de Kock"
  ],
  "Joyson Geniuses": [
    "Sunil Narine (C)",
    "Virat Kohli (VC)",
    "Rashid-Khan",
    "Ravindra Jadeja",
    "Rachin Ravindra",
    "Shubman Gill",
    "Pat Cummins",
    "Suryakumar Yadav",
    "Shashank Singh",
    "Varun Chakravarthy",
    "Lokesh Rahul"
  ],
  "Evil Heroes": [
    "Virat Kohli (C)",
    "Sunil Narine (VC)",
    "Prabhsimran Singh",
    "Abhishek Sharma",
    "Hardik Pandya",
    "Travis Head",
    "Yashasvi Jaiswal",
    "Shubman Gill",
    "Jasprit Bumrah",
    "Rashid-Khan",
    "Harshal Patel"
  ],
  "Dhaval Bhanderi 11": [
    "Ruturaj Gaikwad (C)",
    "Sunil Narine (VC)",
    "Lokesh Rahul",
    "Yashasvi Jaiswal",
    "Shubman Gill",
    "Virat Kohli",
    "Tilak Varma",
    "Shashank Singh",
    "Varun Chakravarthy",
    "Harshal Patel",
    "Arshdeep Singh"
  ],
  "Logansparky": [
    "Ruturaj Gaikwad (C)",
    "Sunil Narine (VC)",
    "Travis Head",
    "Abhishek Sharma",
    "Trent Boult",
    "Sanju Samson",
    "Ayush Badoni",
    "Mohammed Shami",
    "Varun Chakravarthy",
    "Hardik Pandya"
  ],
  "Shub 05": [
    "Virat Kohli (C)",
    "Varun Chakravarthy (VC)",
    "Lokesh Rahul",
    "Ruturaj Gaikwad",
    "Shubman Gill",
    "Shreyas Iyer",
    "Ayush Badoni",
    "Hardik Pandya",
    "Axar Patel",
    "Arshdeep Singh",
    "Mohammed Siraj"
  ],
  "The Magic Knights": [
    "Virat Kohli (C)",
    "Matheesha Pathirana (VC)",
    "Heinrich Klaasen",
    "Prabhsimran Singh",
    "Ruturaj Gaikwad",
    "Sai Sudharsan",
    "Tilak Varma",
    "Abhishek Sharma",
    "Axar Patel",
    "Varun Chakravarthy",
    "Trent Boult"
  ],
  "Sesha Stark": [
    "Shubman Gill (C)",
    "Ruturaj Gaikwad (VC)",
    "Philip Salt",
    "Yashasvi Jaiswal",
    "Virat Kohli",
    "Abhishek Sharma",
    "Sunil Narine",
    "Andre Russell",
    "Varun Chakravarthy",
    "Trent Boult",
    "Yash Dayal"
  ],
  "11 Stars Stats": [
    "Virat Kohli (C)",
    "Hardik Pandya (VC)",
    "Yashasvi Jaiswal",
    "Travis Head",
    "Tilak Varma",
    "Riyan Parag",
    "Lokesh Rahul",
    "Shubman Gill",
    "Pat Cummins",
    "Varun Chakravarthy",
    "Rasikh Salam"
  ],
  "Paranoidfloyd": [
    "Sunil Narine (C)",
    "Axar Patel (VC)",
    "Prabhsimran Singh",
    "Virat Kohli",
    "Abhishek Sharma",
    "Hardik Pandya",
    "Shubman Gill",
    "Kuldeep Yadav",
    "Rashid-Khan",
    "Varun Chakravarthy",
    "Rajat Patidar"
  ],
  "Lizozil": [
    "Virat Kohli (C)",
    "Travis Head (VC)",
    "Lokesh Rahul",
    "Shubman Gill",
    "Rashid-Khan",
    "Tilak Varma",
    "Rachin Ravindra",
    "Rasikh Salam",
    "Jasprit Bumrah",
    "Varun Chakravarthy",
    "Sunil Narine"
  ],
  "Ben Eleven 3011": [
    "Abhishek Sharma (C)",
    "Shreyas Iyer (VC)",
    "Travis Head",
    "Lokesh Rahul",
    "Riyan Parag",
    "Virat Kohli",
    "Rachin Ravindra",
    "Shashank Singh",
    "Arshdeep Singh",
    "Avesh Khan",
    "Varun Chakravarthy"
  ]
  };
  const [data, setData] = useState([]);
  const [topUsersByMode, setTopUsersByMode] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);
  const [search, setSearch] = useState("");
  const [activeMode, setActiveMode] = useState("all");

  useEffect(() => {
  fetch("/currently_winnings.json")
    .then((res) => res.json())
    .then(json => {
      setData(json);
      const updated = new Date(document.lastModified).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      setLastUpdated(updated);
      const topByMode = {};
      const numericFields = [
        'mode1', 'mode2', 'mode4_winnings', 'mode5', 'mode7_winnings', 'mode8_winnings'
      ];
      numericFields.forEach(mode => {
        const max = Math.max(...json.map(u => u[mode] || 0));
        topByMode[mode] = json.filter(u => u[mode] === max).map(u => u.username);
      });
      setTopUsersByMode(topByMode);
      // Load ultimate team tooltips
fetch("/final_mapped_users_ipl2025.json")
  .then(res => res.json())
  .then(teamData => {
    fetch("/full_players.json")
      .then(res => res.json())
      .then(playerData => {
        const playerMap = {};
        Object.values(playerData).forEach(p => {
          playerMap[p.PlayerId] = p.PlayerName;
        });
        const userTeams = {};
        teamData.forEach(entry => {
          const team = entry.playerIds.map(id => playerMap[id] || id);
          userTeams[entry.user.replace(/\s*you\b/i, "")] = team;
        });
        setUltimateTeams(userTeams);
      });
  });
    });
}, []);

  const filtered = data
  .filter(user => user.username.toLowerCase() !== "inamitables")
  .map(user => ({
    ...user,
    username: user.username.replace(/\s*you\b/i, "")
  }))
  .filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
  .sort((a, b) => {
    if (activeMode === "all") return 0;

    const key =
      activeMode === "mode4"
        ? "mode4_points"
        : activeMode === "mode7"
        ? "mode7_points"
        : activeMode === "mode8"
        ? "mode8_winnings"
        : activeMode;

    return (b[key] || 0) - (a[key] || 0);
  });

  return (
    <main className="p-8 max-w-[1400px] mx-auto text-gray-800 bg-gradient-to-br from-purple-100 via-white to-indigo-100 min-h-screen">
      <div className="text-center mb-6">
        <p className="text-xs text-gray-600 font-medium mb-1">
          Last updated: {lastUpdated || "Loading..."}
        </p>
        <div className="flex justify-center">
          <img
            src="/ipl-logo.png"
            alt="IPL 2025"
            className="h-24 drop-shadow-lg rounded-xl"
          />
        </div>
        <h1 className="text-5xl font-extrabold text-center text-indigo-800 tracking-wide mt-2">
          DREAMAUTH CHAMPIONSHIP - 2025
        </h1>
        <div className="text-center text-sm text-red-600 italic mt-2">
          📌 Mode 3 will be updated at the end of the IPL season<br />📌 Mode 6 will be updated after the 1st half of the IPL season
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <div className="flex gap-2 flex-wrap">
          {['all', 'mode1', 'mode2', 'mode4', 'mode5', 'mode7', 'mode8'].map(mode => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-3 py-1 rounded-full text-sm font-semibold border border-indigo-400 transition-all hover:bg-indigo-100 ${activeMode === mode ? 'bg-indigo-500 text-white' : 'text-emerald-700 bg-white'}`}
            >
              {mode === 'all' ? 'All Modes' : (
  <>
    Mode {mode.replace('mode', '')}
    <span
      className="ml-1 cursor-pointer"
      title={
        mode === 'mode1' ? 'Daily Fantasy Group Leaderboard' :
        mode === 'mode2' ? 'Manager Mode Season Long' :
        mode === 'mode4' ? 'The Ultimate Fantasy Team' :
        mode === 'mode5' ? 'Mid-Season Leader in Daily Fantasy' :
        mode === 'mode7' ? 'THALA for a reason: Points from Matches 7,14,21,...' :
        mode === 'mode8' ? 'Ultimate Booster Effect: Best Booster Use Score' : ''
      }
    >
      ℹ️
    </span>
  </>
)}
            </button>
          ))}
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

      <div className="rounded-xl bg-gradient-to-tr from-white to-indigo-50 shadow-2xl border border-indigo-300 mx-auto max-w-[95vw]">
        <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
          <table className="w-full min-w-[1300px] table-fixed border border-gray-300 shadow-md bg-white rounded-lg">
            <thead className="bg-indigo-700 text-white sticky top-0 z-20 shadow-md whitespace-nowrap">
              <tr className="text-sm">
                <th className="p-3 border border-white text-center">#</th>
                <th className="p-3 border border-white text-left">Username</th>
                {activeMode === 'all' || activeMode === 'mode1' ? <th className="p-3 border border-white text-center">Mode 1</th> : null}
                {activeMode === 'all' || activeMode === 'mode2' ? <th className="p-3 border border-white text-center">Mode 2</th> : null}
                {activeMode === 'all' || activeMode === 'mode4' ? <th className="p-3 border border-white text-center">Mode 4</th> : null}
                {activeMode === 'all' || activeMode === 'mode5' ? <th className="p-3 border border-white text-center">Mode 5</th> : null}
                
                {activeMode === 'all' || activeMode === 'mode7' ? <th className="p-3 border border-white text-center">Mode 7</th> : null}
                {activeMode === 'all' || activeMode === 'mode8' ? <th className="p-3 border border-white text-center">Mode 8</th> : null}
                {activeMode === 'all' ? <th className="p-3 border border-white text-right">Total</th> : null}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300 text-sm leading-7">
              {filtered.map((user, i) => (
                <tr
                  key={user.username}
                  className={cn("text-sm border-t", {
                    "bg-yellow-50 font-semibold": i === 0,
                    "bg-white": i % 2 === 0,
                    "bg-gray-50": i % 2 !== 0
                  })}
                >
                  <td className="p-4 text-center font-semibold border border-gray-300 bg-white">
  {i === 0 ? <span className="text-xl">🥇</span> : i === 1 ? <span className="text-xl">🥈</span> : i === 2 ? <span className="text-xl">🥉</span> : i + 1}
</td>
                  <td className="p-4 border border-gray-300 bg-white text-left max-w-[200px] truncate" title={user.username}>{user.username}</td>
                  {activeMode === 'all' || activeMode === 'mode1' ? (
  <td className={`p-4 text-center border border-gray-300 bg-white ${topUsersByMode.mode1?.includes(user.username) ? 'bg-emerald-200' : ''}`}>
    {user.mode1 > 0 ? <span className='text-yellow-600'><CountUp end={user.mode1} duration={1.2} separator="," prefix="₹" /></span> : "-"}
  </td>
) : null}
                  {activeMode === 'all' || activeMode === 'mode2' ? (
  <td className={`p-4 text-center border border-gray-300 bg-white ${topUsersByMode.mode2?.includes(user.username) ? 'bg-emerald-200' : ''}`}>
    {user.mode2 > 0 ? <span className='text-yellow-600'><CountUp end={user.mode2} duration={1.2} separator="," prefix="₹" /></span> : "-"}
  </td>
) : null}
                  {activeMode === 'all' || activeMode === 'mode4' ? (
  <td className={`p-4 text-center font-mono border border-gray-300 bg-white ${topUsersByMode.mode4_winnings?.includes(user.username) ? 'bg-emerald-200' : ''}`}>
    <span
  className="text-blue-700 cursor-pointer"
  title={ultimateTeams[user.username]?.join(', ') || 'No team submitted'}
>
  {user.mode4_points} pts
</span>
    <span className="text-amber-600"> / <CountUp end={user.mode4_winnings} duration={1.2} separator="," prefix="₹" /></span>
  </td>
) : null}
                  {activeMode === 'all' || activeMode === 'mode5' ? (
  <td className={`p-4 text-center border border-gray-300 bg-white ${topUsersByMode.mode5?.includes(user.username) ? 'bg-emerald-200' : ''}`}>
    {user.mode5 > 0 ? <span className='text-yellow-600'><CountUp end={user.mode5} duration={1.2} separator="," prefix="₹" /></span> : "-"}
  </td>
) : null}
                  {activeMode === 'all' || activeMode === 'mode7' ? (
  <td className={`p-4 text-center font-mono border border-gray-300 bg-white ${topUsersByMode.mode7_winnings?.includes(user.username) ? 'bg-emerald-200' : ''}`}>
    <span className="text-blue-700">{user.mode7_points} pts</span>
    <span className="text-amber-600"> / <CountUp end={user.mode7_winnings} duration={1.2} separator="," prefix="₹" /></span>
  </td>
) : null}
                  {activeMode === 'all' || activeMode === 'mode8' ? (
  <td className={`p-4 text-center text-amber-600 font-semibold border border-gray-300 bg-white ${topUsersByMode.mode8_winnings?.includes(user.username) ? 'bg-emerald-200' : ''}`}>
    <CountUp end={user.mode8_winnings} duration={1.2} separator="," prefix="₹" />
  </td>
) : null}
                  {activeMode === 'all' ? (
  <td className="p-4 text-right font-bold text-indigo-800 text-base border border-gray-300 bg-indigo-50">
    <CountUp end={user.total} duration={1.5} separator="," prefix="₹" />
  </td>
) : null}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sticky bottom-0 bg-white border-t border-gray-300 p-3 text-right font-semibold text-yellow-600 text-sm">
            <div className="text-yellow-600 font-semibold">Total Prize Pool: ₹1,62,000</div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        ⚡ Updated after each match • Built by Pranav Reddy 😎
      </div>
    </main>
  );
}
