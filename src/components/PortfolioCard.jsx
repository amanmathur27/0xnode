const PortfolioCard = ({ projectName, text, img }) => {
    return (
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
          <div className="px-8 py-10">
            {/* <div className="bg-red-500 shadow-sm shadow-white w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div> */}
            <img className="w-[50px] h-[50px] rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all" src={img} alt="" />
            <div className="uppercase font-bold text-xl">{projectName}</div>
            <a href={`${text}`} target="_blank" className="text-gray-300 uppercase tracking-widest hover:transition-all hover:text-red-400">
              Click Here
            </a>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
      </div>
    );
  };
  
  export default PortfolioCard;
  