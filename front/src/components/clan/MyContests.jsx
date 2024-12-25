const MyContests = () => {
  const contests = [
    { id: 1, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 2, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 3, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 4, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 5, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
  ];
  return (
    <>
      <div className="w-full overflow-auto">
        <div className="flex justify-between items-center w-full md:px-5">
          <p className="text-lg font-medium">Contest</p>
          <div className="flex w-full justify-end items-center gap-3 font-medium">
            <p>Rating</p>
            <p>Solved</p>
            <p>Ranking</p>
          </div>
        </div>
        {contests.map((contest) => (
          <div
            key={contest.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center space-x-4">
              {/* Placeholder for contest image */}
              <div className="w-40 h-16 bg-gray-300 rounded-lg"></div>
              <div>
                <h3 className="text-lg font-semibold">{contest.name}</h3>
                <p className="text-gray-500">{contest.date}</p>
              </div>
            </div>
            <div className="flex w-1/5 justify-between items-center gap-3 font-medium">
              <p className="">312</p>
              <p>3/5</p>
              <p>512</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MyContests;
