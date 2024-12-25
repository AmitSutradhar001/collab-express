import StatusCard from "../components/clan/StatusCard";

const DetailScreen = () => {
  return (
    <>
      <div className="w-full flex justify-center items-start py-8 lg:px-24">
        <div className="flex flex-col md:flex-row gap-5 w-10/12">
          {/* first div */}
          <div className="w-3/5 min-w-80 border-[1px] border-black rounded-md bg-[#F9F9F9]">
            <div className="border-b-[1px] p-2 border-black flex-wrap flex justify-between items-center gap-2">
              <p className="text-xl font-medium">Transaction Details</p>
              <p className="text-sm font-medium">12 May 2024, 12:35 PM</p>
            </div>
            <div className="px-2 py-4 lg:w-2/3">
              <div className="w-full flex justify-start items-center">
                <div className="w-1/2 font-semibold">Issue no. </div>
                <div className="w-1/2 text-sm">21871283</div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <p className="font-semibold">FORM</p>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">Admin ID </div>
                  <div className="w-1/2 text-sm">2635871283</div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">Sender Name </div>
                  <div className="w-1/2 text-sm">Ashish Patel</div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">Account No. </div>
                  <div className="w-1/2 text-sm">XXXXXXXX8765</div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">IFSC ID </div>
                  <div className="w-1/2 text-sm">XXXXXXXX8765 </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold ">Bank Name </div>
                  <div className="w-1/2 text-sm">KOTAK MAHINDRA BANK </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <p className="font-semibold">TO</p>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">Contributor ID </div>
                  <div className="w-1/2 text-sm">2635871283</div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">Receiver Name </div>
                  <div className="w-1/2 text-sm">Ashish Patel</div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">Account No. </div>
                  <div className="w-1/2 text-sm">XXXXXXXX8765</div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold">IFSC ID </div>
                  <div className="w-1/2 text-sm">XXXXXXXX8765 </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-1/2 font-semibold ">Bank Name </div>
                  <div className="w-1/2 text-sm">KOTAK MAHINDRA BANK </div>
                </div>
              </div>
            </div>
          </div>
          {/* second div */}
          <div className="w-2/5">
            <StatusCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailScreen;
