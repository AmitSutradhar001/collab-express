const ContestHead = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-purple-400 p-5 shadow-lg">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Ready to Contest</h1>
            <p className="text-white">Participate and Win Money</p>
          </div>
        </div>
        <div className="w-full flex justify-center item-center px-10 lg:px-0">
          <div className="bg-gradient-to-r from-purple-400 to-blue-300 rounded-lg w-full lg:w-1/2 flex flex-col gap-5 justify-center items-center py-5 px-16">
            <p className="text-3xl text-white font-semibold">Welcome</p>
            <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
              <div
                className="w-full md:w-1/2  h-48 bg-cover bg-center rounded-md flex flex-col justify-between items-end"
                style={{
                  backgroundImage: `url(https://picsum.photos/800/600?random=${Math.random()})`,
                }}
              >
                <div className="w-full flex justify-end p-3 items-end">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.95 2.7H20.25V1.35C20.25 0.991958 20.1078 0.64858 19.8546 0.395406C19.6014 0.142232 19.258 0 18.9 0C18.542 0 18.1986 0.142232 17.9454 0.395406C17.6922 0.64858 17.55 0.991958 17.55 1.35V2.7H9.45V1.35C9.45 0.991958 9.30777 0.64858 9.05459 0.395406C8.80142 0.142232 8.45804 0 8.1 0C7.74196 0 7.39858 0.142232 7.14541 0.395406C6.89223 0.64858 6.75 0.991958 6.75 1.35V2.7H4.05C2.97587 2.7 1.94574 3.1267 1.18622 3.88622C0.426695 4.64574 0 5.67587 0 6.75V22.95C0 24.0241 0.426695 25.0543 1.18622 25.8138C1.94574 26.5733 2.97587 27 4.05 27H22.95C24.0241 27 25.0543 26.5733 25.8138 25.8138C26.5733 25.0543 27 24.0241 27 22.95V6.75C27 5.67587 26.5733 4.64574 25.8138 3.88622C25.0543 3.1267 24.0241 2.7 22.95 2.7ZM24.3 22.95C24.3 23.308 24.1578 23.6514 23.9046 23.9046C23.6514 24.1578 23.308 24.3 22.95 24.3H4.05C3.69196 24.3 3.34858 24.1578 3.09541 23.9046C2.84223 23.6514 2.7 23.308 2.7 22.95V13.5H24.3V22.95ZM24.3 10.8H2.7V6.75C2.7 6.39196 2.84223 6.04858 3.09541 5.79541C3.34858 5.54223 3.69196 5.4 4.05 5.4H6.75V6.75C6.75 7.10804 6.89223 7.45142 7.14541 7.70459C7.39858 7.95777 7.74196 8.1 8.1 8.1C8.45804 8.1 8.80142 7.95777 9.05459 7.70459C9.30777 7.45142 9.45 7.10804 9.45 6.75V5.4H17.55V6.75C17.55 7.10804 17.6922 7.45142 17.9454 7.70459C18.1986 7.95777 18.542 8.1 18.9 8.1C19.258 8.1 19.6014 7.95777 19.8546 7.70459C20.1078 7.45142 20.25 7.10804 20.25 6.75V5.4H22.95C23.308 5.4 23.6514 5.54223 23.9046 5.79541C24.1578 6.04858 24.3 6.39196 24.3 6.75V10.8Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
                <div className="w-full flex flex-col justify-start items-start p-3 border-t-[1px] border-white">
                  <p className="text-white font-medium">
                    {new Date().toLocaleDateString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      weekday: "long",
                    })}
                    ,
                  </p>
                  <p className="text-sm text-white">
                    {new Date()
                      .toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, ".")}
                    ,{" "}
                    {new Date().toLocaleTimeString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 h-48 bg-cover bg-center rounded-md flex flex-col justify-between items-end"
                style={{
                  backgroundImage: `url(https://picsum.photos/800/600?random=${Math.random()})`,
                }}
              >
                <div className="w-full flex justify-end p-3 items-end">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.95 2.7H20.25V1.35C20.25 0.991958 20.1078 0.64858 19.8546 0.395406C19.6014 0.142232 19.258 0 18.9 0C18.542 0 18.1986 0.142232 17.9454 0.395406C17.6922 0.64858 17.55 0.991958 17.55 1.35V2.7H9.45V1.35C9.45 0.991958 9.30777 0.64858 9.05459 0.395406C8.80142 0.142232 8.45804 0 8.1 0C7.74196 0 7.39858 0.142232 7.14541 0.395406C6.89223 0.64858 6.75 0.991958 6.75 1.35V2.7H4.05C2.97587 2.7 1.94574 3.1267 1.18622 3.88622C0.426695 4.64574 0 5.67587 0 6.75V22.95C0 24.0241 0.426695 25.0543 1.18622 25.8138C1.94574 26.5733 2.97587 27 4.05 27H22.95C24.0241 27 25.0543 26.5733 25.8138 25.8138C26.5733 25.0543 27 24.0241 27 22.95V6.75C27 5.67587 26.5733 4.64574 25.8138 3.88622C25.0543 3.1267 24.0241 2.7 22.95 2.7ZM24.3 22.95C24.3 23.308 24.1578 23.6514 23.9046 23.9046C23.6514 24.1578 23.308 24.3 22.95 24.3H4.05C3.69196 24.3 3.34858 24.1578 3.09541 23.9046C2.84223 23.6514 2.7 23.308 2.7 22.95V13.5H24.3V22.95ZM24.3 10.8H2.7V6.75C2.7 6.39196 2.84223 6.04858 3.09541 5.79541C3.34858 5.54223 3.69196 5.4 4.05 5.4H6.75V6.75C6.75 7.10804 6.89223 7.45142 7.14541 7.70459C7.39858 7.95777 7.74196 8.1 8.1 8.1C8.45804 8.1 8.80142 7.95777 9.05459 7.70459C9.30777 7.45142 9.45 7.10804 9.45 6.75V5.4H17.55V6.75C17.55 7.10804 17.6922 7.45142 17.9454 7.70459C18.1986 7.95777 18.542 8.1 18.9 8.1C19.258 8.1 19.6014 7.95777 19.8546 7.70459C20.1078 7.45142 20.25 7.10804 20.25 6.75V5.4H22.95C23.308 5.4 23.6514 5.54223 23.9046 5.79541C24.1578 6.04858 24.3 6.39196 24.3 6.75V10.8Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
                <div className="w-full flex flex-col justify-start items-start p-3 border-t-[1px] border-white">
                  <p className="text-white font-medium">
                    {new Date().toLocaleDateString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      weekday: "long",
                    })}
                    ,
                  </p>
                  <p className="text-sm text-white">
                    {new Date()
                      .toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, ".")}
                    ,{" "}
                    {new Date().toLocaleTimeString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestHead;
