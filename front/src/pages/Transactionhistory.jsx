const Transactionhistory = () => {
  return (
    <>
      <div className="w-full flex justify-start items-start">
        <div className="px-20 pt-10 w-full">
          {/* 1st div */}
          <div className="w-2/3">
            <p className="text-2xl font-semibold">Transactions</p>
            <div className="w-2/3 flex justify-between items-start py-4 font-semibold">
              <p>All</p>
              <p>Received</p>
              <p>Withdrawn</p>
              <p>Processing</p>
              <p>Pending</p>
            </div>
          </div>
          {/* table */}
          <div className="relative border-[1px] border-gray-400 rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className=" ml-10 text-xs rounded-lg bg-gradient-to-r from-purple-500 to-blue-400  text-white ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Admin Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Issue No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className=" bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 flex gap-2 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="w-5 h-5 p-5 rounded-lg bg-gray-200"></div>
                    <div className="text-sm font-normal">
                      <p className="font-semibold">Ashish Patel</p>
                      <p>ID: 21871283</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        Malesuada cras...
                      </p>
                      <p>21871283</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        15 April 2024
                      </p>
                      <p>At 8:23 PM</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">₹ 35000 </td>
                  <td className="px-6 py-4 font-semibold">Pending</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-white bg-gradient-to-r from-purple-500 to-blue-500 font-semibold rounded-md">
                      Details
                    </button>
                  </td>
                </tr>
                <tr className=" bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 flex gap-2 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="w-5 h-5 p-5 rounded-lg bg-gray-200"></div>
                    <div className="text-sm font-normal">
                      <p className="font-semibold">Ashish Patel</p>
                      <p>ID: 21871283</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        Malesuada cras...
                      </p>
                      <p>21871283</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        15 April 2024
                      </p>
                      <p>At 8:23 PM</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">₹ 35000 </td>
                  <td className="px-6 py-4 font-semibold">Pending</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-white bg-gradient-to-r from-purple-500 to-blue-500 font-semibold rounded-md">
                      Details
                    </button>
                  </td>
                </tr>
                <tr className=" bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 flex gap-2 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="w-5 h-5 p-5 rounded-lg bg-gray-200"></div>
                    <div className="text-sm font-normal">
                      <p className="font-semibold">Ashish Patel</p>
                      <p>ID: 21871283</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        Malesuada cras...
                      </p>
                      <p>21871283</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        15 April 2024
                      </p>
                      <p>At 8:23 PM</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">₹ 35000 </td>
                  <td className="px-6 py-4 font-semibold">Pending</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-white bg-gradient-to-r from-purple-500 to-blue-500 font-semibold rounded-md">
                      Details
                    </button>
                  </td>
                </tr>
                <tr className=" bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 flex gap-2 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="w-5 h-5 p-5 rounded-lg bg-gray-200"></div>
                    <div className="text-sm font-normal">
                      <p className="font-semibold">Ashish Patel</p>
                      <p>ID: 21871283</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        Malesuada cras...
                      </p>
                      <p>21871283</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 w-40">
                    <div className="w-full text-sm">
                      <p className="overflow-hidden font-semibold">
                        15 April 2024
                      </p>
                      <p>At 8:23 PM</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">₹ 35000 </td>
                  <td className="px-6 py-4 font-semibold">Pending</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-white bg-gradient-to-r from-purple-500 to-blue-500 font-semibold rounded-md">
                      Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transactionhistory;
