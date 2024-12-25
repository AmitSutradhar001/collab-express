const Leaderboard = () => {
  const clans = [
    { ranking: "#1", name: "Aslkasd", issuesSolved: "15/15", rating: 1590 },
    { ranking: "#1", name: "Aslkasd", issuesSolved: "15/15", rating: 1590 },
    { ranking: "#1", name: "Aslkasd", issuesSolved: "15/15", rating: 1590 },
    { ranking: "#1", name: "Aslkasd", issuesSolved: "15/15", rating: 1590 },
    { ranking: "#1", name: "Aslkasd", issuesSolved: "15/15", rating: 1590 },
    { ranking: "#1", name: "Aslkasd", issuesSolved: "15/15", rating: 1590 },
    { ranking: "#1", name: "Aslkasd", issuesSolved: "15/15", rating: 1590 },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="px-6 py-4">Ranking</th>
            <th className="px-6 py-4">Clan Name</th>
            <th className="px-6 py-4">Issues Solved</th>
            <th className="px-6 py-4">Rating</th>
          </tr>
        </thead>
        <tbody>
          {clans.map((clan, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-center">{clan.ranking}</td>
              <td className="px-6 py-4 text-center">{clan.name}</td>
              <td className="px-6 py-4 text-center">{clan.issuesSolved}</td>
              <td className="px-6 py-4 text-center">{clan.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
