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
            <div className="w-2/12 px-5 py-3 flex justify-between items-center  border-r-[1px] border-purple-500">
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
        </div>
      </div>
    </>
  );
};
export default Discord;
