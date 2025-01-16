const Discord = () => {
  return (
    <>
      <div className="mt-5 flex w-full">
        <div className="w-20 p-2 flex flex-col justify-start items-center gap-5">
          <button className="group focus:rounded-md rounded-full w-12">
            <img
                src="./clan/1.png"
                className="rounded-full group-focus:rounded-md"
                alt="Example"
            />
          </button>
          <button className="group focus:rounded-md rounded-full w-12">
            <img
              src="./clan/2.png"
              className="rounded-full group-focus:rounded-md"
              alt="Example"
            />
          </button>
          <svg
            width="50"
            height="50"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="29.5" stroke="#DCDCD9" />
            <path
              d="M29.7712 43.6248C37.4226 43.6248 43.6253 37.4221 43.6253 29.7707C43.6253 22.1192 37.4226 15.9165 29.7712 15.9165C22.1197 15.9165 15.917 22.1192 15.917 29.7707C15.917 37.4221 22.1197 43.6248 29.7712 43.6248Z"
              stroke="url(#paint0_linear_111_1041)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.0837 45.0832L42.167 42.1665"
              stroke="url(#paint1_linear_111_1041)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111_1041"
                x1="29.7712"
                y1="15.9165"
                x2="29.7712"
                y2="43.6248"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A54DFF" />
                <stop offset="1" stopColor="#4E4DFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_111_1041"
                x1="43.6253"
                y1="42.1665"
                x2="43.6253"
                y2="45.0832"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A54DFF" />
                <stop offset="1" stopColor="#4E4DFF" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="50"
            height="50"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="29.5" stroke="#D9D9D9" />
            <path
              d="M32.5217 17.0217C32.5217 16.4855 32.3087 15.9713 31.9296 15.5922C31.5504 15.213 31.0362 15 30.5 15C29.9638 15 29.4496 15.213 29.0704 15.5922C28.6913 15.9713 28.4783 16.4855 28.4783 17.0217V28.4783H17.0217C16.4855 28.4783 15.9713 28.6913 15.5922 29.0704C15.213 29.4496 15 29.9638 15 30.5C15 31.0362 15.213 31.5504 15.5922 31.9296C15.9713 32.3087 16.4855 32.5217 17.0217 32.5217H28.4783V43.9783C28.4783 44.5145 28.6913 45.0287 29.0704 45.4078C29.4496 45.787 29.9638 46 30.5 46C31.0362 46 31.5504 45.787 31.9296 45.4078C32.3087 45.0287 32.5217 44.5145 32.5217 43.9783V32.5217H43.9783C44.5145 32.5217 45.0287 32.3087 45.4078 31.9296C45.787 31.5504 46 31.0362 46 30.5C46 29.9638 45.787 29.4496 45.4078 29.0704C45.0287 28.6913 44.5145 28.4783 43.9783 28.4783H32.5217V17.0217Z"
              fill="url(#paint0_linear_111_1044)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111_1044"
                x1="20"
                y1="15"
                x2="38.5"
                y2="46"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A54DFF" />
                <stop offset="1" stop-color="#4E4DFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col border-[1px] border-purple-500 bg-gradient-to-tl from-purple-400 via-blue-300 to-purple-400 w-full rounded-t-lg h-screen">
          <div className="flex w-full items-center border-b-[1px] border-purple-500 ">
            <div className="w-2/12 px-5 py-3 flex justify-between items-center border-r-[1px] border-purple-500">
            <p className="text-white font-medium">Space City</p>
            <svg width="20" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6713 0.894078L15.9593 12.421C15.7038 12.6738 15.3588 12.8156 14.9994 12.8156C14.6399 12.8156 14.2949 12.6738 14.0394 12.421L2.32746 0.896579C2.07033 0.643902 1.72425 0.502317 1.36375 0.502317C1.00326 0.502317 0.657177 0.643902 0.400051 0.896579C0.273436 1.02002 0.17281 1.16755 0.104103 1.33048C0.0353985 1.49342 1.90735e-06 1.66846 1.90735e-06 1.84529C1.90735e-06 2.02211 0.0353985 2.19715 0.104103 2.36009C0.17281 2.52302 0.273436 2.67055 0.400051 2.79399L12.1095 14.3184C12.8808 15.0757 13.9185 15.5 14.9994 15.5C16.0803 15.5 17.118 15.0757 17.8892 14.3184L29.5987 2.79399C29.7257 2.67051 29.8266 2.52283 29.8955 2.35966C29.9645 2.1965 30 2.02116 30 1.84403C30 1.6669 29.9645 1.49157 29.8955 1.32841C29.8266 1.16524 29.7257 1.01755 29.5987 0.894078C29.3415 0.641401 28.9955 0.499817 28.635 0.499817C28.2745 0.499817 27.9284 0.641401 27.6713 0.894078Z" fill="white"/>
            </svg>

            </div>
            <div className="w-7/12 text-black font-semibold px-10 py-3">#General</div>
            <div className="w-3/12 flex justify-end items-center py-3 px-5 gap-5">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10V2H11V0H1V2H2V10L0 12V14H5.2V20H6.8V14H12V12L10 10Z" fill="#111111"/>
            </svg>
            <img src="./clan/4.png" className="w-7 rounded-full"/>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 16.125C14.2259 16.125 15.625 14.7259 15.625 13C15.625 11.2741 14.2259 9.875 12.5 9.875C10.7741 9.875 9.375 11.2741 9.375 13C9.375 14.7259 10.7741 16.125 12.5 16.125Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.08301 13.9168V12.0835C2.08301 11.0002 2.96842 10.1043 4.06217 10.1043C5.94759 10.1043 6.71842 8.77099 5.77051 7.13557C5.22884 6.19807 5.55176 4.97932 6.49967 4.43766L8.30176 3.40641C9.12467 2.91682 10.1872 3.20849 10.6768 4.03141L10.7913 4.22932C11.7288 5.86474 13.2705 5.86474 14.2184 4.22932L14.333 4.03141C14.8226 3.20849 15.8851 2.91682 16.708 3.40641L18.5101 4.43766C19.458 4.97932 19.7809 6.19807 19.2393 7.13557C18.2913 8.77099 19.0622 10.1043 20.9476 10.1043C22.0309 10.1043 22.9268 10.9897 22.9268 12.0835V13.9168C22.9268 15.0002 22.0413 15.896 20.9476 15.896C19.0622 15.896 18.2913 17.2293 19.2393 18.8647C19.7809 19.8127 19.458 21.021 18.5101 21.5627L16.708 22.5939C15.8851 23.0835 14.8226 22.7918 14.333 21.9689L14.2184 21.771C13.2809 20.1356 11.7393 20.1356 10.7913 21.771L10.6768 21.9689C10.1872 22.7918 9.12467 23.0835 8.30176 22.5939L6.49967 21.5627C5.55176 21.021 5.22884 19.8022 5.77051 18.8647C6.71842 17.2293 5.94759 15.896 4.06217 15.896C2.96842 15.896 2.08301 15.0002 2.08301 13.9168Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
          </div>
          <div className="flex flex-row w-full items-center h-full ">
            <div className="w-2/12 pt-3 flex flex-col h-full justify-between items-center border-r-[1px] border-purple-500">
            <div className="flex flex-col w-full gap-5">
              <div className="group ml-8 flex justify-between items-center p-2 rounded-md text-white bg-transparent  hover:bg-white hover:text-black transition-colors duration-300">
                <p className="">#General</p>
                <div className="flex gap-2 items-center text-white group-hover:text-black duration-300">
                <svg className="stroke-current" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.91016 22C3.91016 18.13 7.76015 15 12.5002 15C13.4602 15 14.3902 15.13 15.2602 15.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 18C22.5 18.32 22.46 18.63 22.38 18.93C22.29 19.33 22.13 19.72 21.92 20.06C21.23 21.22 19.96 22 18.5 22C17.47 22 16.54 21.61 15.84 20.97C15.54 20.71 15.28 20.4 15.08 20.06C14.71 19.46 14.5 18.75 14.5 18C14.5 16.92 14.93 15.93 15.63 15.21C16.36 14.46 17.38 14 18.5 14C19.68 14 20.75 14.51 21.47 15.33C22.11 16.04 22.5 16.98 22.5 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.9897 17.98H17.0098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" stroke-linejoin="round"/>
                <path d="M18.5 16.52V19.51" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="stroke-current" width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 16.125C14.2259 16.125 15.625 14.7259 15.625 13C15.625 11.2741 14.2259 9.875 12.5 9.875C10.7741 9.875 9.375 11.2741 9.375 13C9.375 14.7259 10.7741 16.125 12.5 16.125Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.08301 13.9168V12.0835C2.08301 11.0002 2.96842 10.1043 4.06217 10.1043C5.94759 10.1043 6.71842 8.77099 5.77051 7.13557C5.22884 6.19807 5.55176 4.97932 6.49967 4.43766L8.30176 3.40641C9.12467 2.91682 10.1872 3.20849 10.6768 4.03141L10.7913 4.22932C11.7288 5.86474 13.2705 5.86474 14.2184 4.22932L14.333 4.03141C14.8226 3.20849 15.8851 2.91682 16.708 3.40641L18.5101 4.43766C19.458 4.97932 19.7809 6.19807 19.2393 7.13557C18.2913 8.77099 19.0622 10.1043 20.9476 10.1043C22.0309 10.1043 22.9268 10.9897 22.9268 12.0835V13.9168C22.9268 15.0002 22.0413 15.896 20.9476 15.896C19.0622 15.896 18.2913 17.2293 19.2393 18.8647C19.7809 19.8127 19.458 21.021 18.5101 21.5627L16.708 22.5939C15.8851 23.0835 14.8226 22.7918 14.333 21.9689L14.2184 21.771C13.2809 20.1356 11.7393 20.1356 10.7913 21.771L10.6768 21.9689C10.1872 22.7918 9.12467 23.0835 8.30176 22.5939L6.49967 21.5627C5.55176 21.021 5.22884 19.8022 5.77051 18.8647C6.71842 17.2293 5.94759 15.896 4.06217 15.896C2.96842 15.896 2.08301 15.0002 2.08301 13.9168Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </div>
              </div>
              <div className="group ml-8 flex justify-between items-center p-2 rounded-md text-white bg-transparent  hover:bg-white hover:text-black transition-colors duration-300">
                <p className="">#Gaming</p>
              </div>
            </div>
            <div className="w-full bg-gray-700 p-2 flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img src="./clan/4.png" className="rounded-full w-8"/>
                <div className="flex flex-col text-white">
                  <p className="">Amit Singh</p>
                  <p className="text-sm">Online</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <svg width="20" height="23" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.75 5.375C14.75 2.95875 12.7912 1 10.375 1C7.95875 1 6 2.95875 6 5.375V13.5C6 15.9162 7.95875 17.875 10.375 17.875C12.7912 17.875 14.75 15.9162 14.75 13.5V5.375Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M1 12.875C1 18.0525 5.1975 22.25 10.375 22.25M10.375 22.25C15.5525 22.25 19.75 18.0525 19.75 12.875M10.375 22.25V26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <svg width="25" height="25" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 16.125C14.2259 16.125 15.625 14.7259 15.625 13C15.625 11.2741 14.2259 9.875 12.5 9.875C10.7741 9.875 9.375 11.2741 9.375 13C9.375 14.7259 10.7741 16.125 12.5 16.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.08301 13.9168V12.0835C2.08301 11.0002 2.96842 10.1043 4.06217 10.1043C5.94759 10.1043 6.71842 8.77099 5.77051 7.13557C5.22884 6.19807 5.55176 4.97932 6.49967 4.43766L8.30176 3.40641C9.12467 2.91682 10.1872 3.20849 10.6768 4.03141L10.7913 4.22932C11.7288 5.86474 13.2705 5.86474 14.2184 4.22932L14.333 4.03141C14.8226 3.20849 15.8851 2.91682 16.708 3.40641L18.5101 4.43766C19.458 4.97932 19.7809 6.19807 19.2393 7.13557C18.2913 8.77099 19.0622 10.1043 20.9476 10.1043C22.0309 10.1043 22.9268 10.9897 22.9268 12.0835V13.9168C22.9268 15.0002 22.0413 15.896 20.9476 15.896C19.0622 15.896 18.2913 17.2293 19.2393 18.8647C19.7809 19.8127 19.458 21.021 18.5101 21.5627L16.708 22.5939C15.8851 23.0835 14.8226 22.7918 14.333 21.9689L14.2184 21.771C13.2809 20.1356 11.7393 20.1356 10.7913 21.771L10.6768 21.9689C10.1872 22.7918 9.12467 23.0835 8.30176 22.5939L6.49967 21.5627C5.55176 21.021 5.22884 19.8022 5.77051 18.8647C6.71842 17.2293 5.94759 15.896 4.06217 15.896C2.96842 15.896 2.08301 15.0002 2.08301 13.9168Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

              </div>
            </div>
            </div>
            {/* chat part */}
            <div className="w-7/12 h-full flex bg-white">amit</div>
            {/* right side */}
            <div className="w-3/12 pt-3 flex flex-col h-full justify-start border-l-[1px] border-purple-500">
            <div className="flex flex-col justify-start gap-5 w-full h-4/5 px-5">
              <p className="text-white font-bold text-2xl text-start">Members</p>
              <div className="bg-white w-full p-2 rounded-md flex justify-center items-center">
                <input type="text" className="outline-none w-full placeholder:text-black" placeholder="Search" />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.58366 17.4998C13.9559 17.4998 17.5003 13.9554 17.5003 9.58317C17.5003 5.21092 13.9559 1.6665 9.58366 1.6665C5.2114 1.6665 1.66699 5.21092 1.66699 9.58317C1.66699 13.9554 5.2114 17.4998 9.58366 17.4998Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.3337 18.3332L16.667 16.6665" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

              </div>
              {/* list */}
              <div className="w-full h-full max-h-96 overflow-y-auto bg-white rounded-lg p-3 flex flex-col gap-4">
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src="./clan/1.png" className="w-10 rounded-full"/>
                  <p className="text-gray-800 font-medium">Amit Singh</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Discord;
