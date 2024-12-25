const FundScreen = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-start ">
        <div className="w-full h-full md:w-8/12 md:h-3/6 shadow-md border-2 rounded-md mt-14 flex flex-col md:flex-row">
          <div className="w-full lg:w-3/5 flex  justify-center items-start p-8 pr-4">
            <div className="w-full bg-[#F9F9F9] flex flex-col border-2 h-fit rounded-md">
              <div className="flex justify-between items-start p-4 border-b-2">
                <div className="flex-wrap">
                  <p className="font-semibold">Total Fund Available</p>
                  <p>₹ 10,000</p>
                </div>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2 8.4H10.8V6H13.2M13.2 18H10.8V10.8H13.2M12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0Z"
                    fill="#111111"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-start p-4 border-b-2">
                <p className="font-semibold">Fund to withdraw</p>
                <div className="flex gap-2 justify-center items-center">
                  <p className="text-lg">
                    00.<span className="text-sm">00</span>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    id="right-arrow"
                  >
                    <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-start p-4">
                <p className="font-semibold">View all transactions</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  id="right-arrow"
                >
                  <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-start p-8 pl-4">
            <div className="w-full bg-[#F9F9F9] flex flex-col border-2 h-fit rounded-md">
              <div className="border-b-2 flex p-4 justify-center items-center font-semibold">
                Withdraw Fund
              </div>
              <div className="border-b-2 flex flex-col gap-4 p-4 justify-center items-center text-sm">
                <div className=" flex justify-between items-center w-full">
                  <p>Withdrawable Fund</p>
                  <p>₹ 00.00</p>
                </div>
                <div className=" flex justify-between items-center w-full">
                  <p>Enter Amount</p>
                  <p>₹ 00.00</p>
                </div>
              </div>
              <div className=" flex flex-col gap-4 p-4 justify-center items-center text-sm">
                <div className=" flex justify-between items-center w-full">
                  <p>To Federal Bank XXXX9876</p>
                  <p>Change</p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 rounded-md mb-2">
                  WITHDRAW FUND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FundScreen;
