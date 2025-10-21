import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Knalrecept from "./assets/knalrecept.jpg";
import Header from "./components/header/Header.jsx";
import Pagination from "./components/Pagination.jsx";
import Profile from "./assets/profile-picture.jpg";
import ReactLogo from "./assets/react-logo.png";
import LaravelLogo from "./assets/laravel-logo.png";
import HogeschoolRotterdam from "./assets/hogeschool-rotterdam.png";
import BackgroundImage from "./assets/background-image.jpg";
import Navigation from "./components/navigation/Navigation.jsx";
import TournatonProject from "./assets/tournaton.png";
import pokemonbotlogo from "./assets/pokemon_chatbot-applogo.png"
import musuemApp from "./assets/musuem-app.png"
import aanmeldplatform from './assets/aanmeldplatform_landvanons.png'
import ProjectGridLayout from "./components/projects/ProjectGridLayout.jsx";

function App() {
  // const token  = dotenv.config({path: "../.env"}).process.env.GITHUB_TOKEN
 // eslint-disable-next-line no-undef

 
  const [count, setCount] = useState(0);
  
  // const ownProjects = allProjects.filter((p) => p === "pascalheikamp");
  // const filteredProjects = projects.filter((i) => i.owner.login === ownProjects)
  // if(ownProjects) {
  //   const projectNames = projects.map((project) => (project.name))
  //   console.log("The project names of pascal are: " + projectNames)
  // }
 

  return (
    <>
      <div className={"bg-ford-blue"}>
        <Navigation />
        <Header />
        <main className={"bg-ford-blue  w-full h-full"}>
          <section className={"flex flex-col  mt-auto mb-auto  mt-20 "}>
            <h1 className={"text-4xl text-center text-light-blue"}>Projects</h1>
            <div className={"flex justify-center"}><h1 className={"text-3xl pr-20 text-center text-light-blue"}>School project</h1><h1 className={"text-3xl text-center text-light-blue"}>Eigen project</h1></div>
           <ProjectGridLayout/>
          </section>
        </main>
        <footer className={"bg-blue h-96"}></footer>
      </div>
    </>
  );
}

export default App;
