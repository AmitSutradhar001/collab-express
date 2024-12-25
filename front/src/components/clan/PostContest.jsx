const PostContest = () => {
  const contests = [
    { id: 1, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 2, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 3, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 4, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
    { id: 5, name: "Weekly Contest 27", date: "May 19, 2024 7:30 PM" },
  ];
  return (
    <>
      {/* Contest List */}
      <div className="w-full">
        {contests.map((contest) => (
          <div
            key={contest.id}
            className="flex flex-wrap items-center justify-between p-4"
          >
            <div className="flex items-center space-x-4">
              {/* Placeholder for contest image */}
              <div className="w-40 h-16 bg-gray-300 rounded-lg"></div>
              <div>
                <h3 className="text-lg font-semibold">{contest.name}</h3>
                <p className="text-gray-500">{contest.date}</p>
              </div>
            </div>
            <button className=" font-semibold">View Details</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default PostContest;
