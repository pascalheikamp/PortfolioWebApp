import Knalrecept from "../../assets/knalrecept.jpg";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import useFetch from "../../../hooks/useFetch";
const ProjectGridLayout = () => {
const layout = [
  { colStart: 1, rowStart: 1, colSpan: 2, rowSpan: 2 }, // (1) — no explicit colStart/rowStart, default to 1
  { colStart: 1, rowStart: 3, colSpan: 1, rowSpan: 3 }, // (2)
  { colStart: 3, rowStart: 1, colSpan: 1, rowSpan: 3 }, // (3)
  { colStart: 2, rowStart: 3, colSpan: 1, rowSpan: 3 }, // (4)
  { colStart: 3, rowStart: 4, colSpan: 2, rowSpan: 2 }, // (5)
  { colStart: 4, rowStart: 1, colSpan: 1, rowSpan: 3 }, // (6)
  { colStart: 5, rowStart: 1, colSpan: 1, rowSpan: 5 }, // (7)
];

const parameterObj = {
  per_page: 100,
  page: 1
}
const endpoint = import.meta.env.VITE_GITHUB_REPO_ENDPOINT;
console.log(endpoint)
const {projects} = useFetch( endpoint, parameterObj)


  const ownProjects  = projects.filter((project) => (project.owner.login === "pascalheikamp"))
  const totalOwnProjects = ownProjects.length
  //const totalOwnProjects = ownProjects.length
  // const projectnames = title.map(name => (name.name))

  // const totalProjectsOverView = 9
  // const index = totalProjectsOverView.forEach((i) => {i})
  // console.log(projectnames)
  return (
    // {title.title.map((item, index) => (
    <div>
    <div className="grid grid-cols-5 grid-rows-6 gap-3 mt-10">
      {ownProjects.slice(0, 7).map((project, index) => {
        console.log(project);
        const pos = layout[index] || {
          colStart: (index % 5) + 1,
          rowStart: Math.floor(index / 5) + 1,
          colSpan: 1,
          rowSpan: 1,
        };

        return (
          <div
            key={index}
            className={`col-start-${pos.colStart} transition duration-300  ease-in-out hover:opacity-95 cursor-pointer bg-transparent row-start-${pos.rowStart} col-span-${pos.colSpan} row-span-${pos.rowSpan} bg-white p-4 border border-gray-300`}
          >
            <div className="relative group bg-gray-200 h-64 w-full rounded-lg overflow-hidden">
              <a href="/project">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl text-white">{project.name}</h2>
                </div>
                <img className="h-full w-full object-cover" src={Knalrecept} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
    <Pagination totalProjects={totalOwnProjects}/>
    </div>
  );
};
export default ProjectGridLayout;
