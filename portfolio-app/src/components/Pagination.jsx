import { useState } from "react";

const Pagination = (totalProjects, currentPage) => {
  console.log(totalProjects);
  const pages = Math.round(totalProjects.totalProjects / 9);
  const pageArrayList = [];
  for (let i = 1; i <= pages; i++) {
    pageArrayList.push(i);
  }

  // const [isOnFirstPage, setIsOnFirstPage] = useState(true) 
 
  // console.log(buttons)
 
  return (
    <div className="h-28 mb-20 ml-auto mr-auto flex justify-center">
      <div className="mb-72 flex gap-7 mt-auto">
        <button className="w-40 h-10 bg-gray-white">Previous</button>
        {pageArrayList.map((item, index) => (
          <button className="bg-gray-white w-10" key={index}>
            {item}
          </button>
        ))}
        <button className="w-40 bg-gray-white">Next</button>
      </div>
    </div>
  );
};

export default Pagination;
