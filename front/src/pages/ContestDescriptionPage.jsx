import ContestRight from "../components/clan/Contestright";
import Countdown from "../components/clan/Countdown";
import Prize from "../components/clan/Prize";

const ContestDescriptionPage = () => {
  return (
    <>
      <div className="w-full flex justify-start items-center">
        <div className="px-0 sm:px-5 lg:px-20 py-10 w-full">
          <p className="text-4xl font-medium pb-5">Contest 28</p>
          <div className="h-screen w-full flex gap-5 flex-col md:flex-row">
            <div className="w-full md:w-3/5 ">
              <ContestRight />
            </div>
            <div className="w-full md:w-2/5 flex flex-col gap-5">
              <Countdown />
              <Prize />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContestDescriptionPage;
