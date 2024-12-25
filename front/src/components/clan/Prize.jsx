const Prize = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] p-5 rounded-lg flex flex-col gap-1">
        <h2 className="text-xl font-bold mb-4">Contest Prizes</h2>
        <div className="flex justify-between items-center font-semibold">
          <p>#1</p>
          <p>₹ 20,000</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p>#2</p>
          <p>₹ 20,000</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p>#4-20</p>
          <p>₹ 20,000</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p>#20-50</p>
          <p>₹ 20,000</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p>#50-1000</p>
          <p>₹ 20,000</p>
        </div>
      </div>
    </>
  );
};
export default Prize;
