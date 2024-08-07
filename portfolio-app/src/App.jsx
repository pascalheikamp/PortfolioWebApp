import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './assets/profile-picture.jpg';
import ReactLogo from './assets/react-logo.png'
import LaravelLogo from './assets/laravel-logo.png'
import HogeschoolRotterdam from './assets/hogeschool-rotterdam.png'
import BackgroundImage from './/assets/background-image.jpg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={"bg-white"}>
                <header className={"h- w-auto grid grid-cols-2 grid-rows-2 col-span-3 bg-white m-0"}>
                    <section
                        className={"h-full   bg-dark-blue shadow-2xl  pt-14 grid grid-cols-2 grid-rows-1 col-span-3"}>
                        <div className={"text-light-blue m-auto mr-auto"}>
                            <div className={"flex flex-col justify-evenly"}>
                                <h1 className={"text-5xl "}>Software developer portfolio</h1>
                                <h2 className={"mt-6 text-center"}>Slide title here</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className={'flex w-auto mb-10 mr-40 pl-10   justify-center mt-44  h-auto'}>

                            <img className={'w-96 relative top-40 mt-32 h-96 rounded-full'} src={Profile}/>
                        </div>
                    </section>
                    <section className={""}>
                        <div className={"flex justify-between"}>
                            <div className={"bg-blue-purple  "}>
                                {/*<div className={"ml-auto text-white  mr-auto pl-44 pr-32"}>*/}
                                {/*    <h2 className={"text-xl font-bold pt-3"}>Introductie</h2>*/}
                                {/*    <p className={"mt-3"}>Mijn naam is Pascal Heikamp en ik woon in Den Haag</p>*/}
                                {/*</div>*/}
                                {/*    content for porfolio title and description*/}
                            </div>
                            <h2 className={"absolute left-60 text-4xl mt-14"}>Resultaten</h2>
                            <div className={"bg-white mt-32 ml-0 h-auto relative left-60 w-60 h-52   flex  mt-10 h-32 w-full shadow-2xl"}><p className={"mb-auto mt-auto ml-auto mr-auto"}>Hello</p></div>
                            <div className={"bg-white mt-32 ml-20  h-auto relative left-60  flex  mt-10 h-52 w-60 w-full shadow-2xl"}><p className={"text-4xl ml-auto mr-auto mt-auto mb-auto"}>40%</p></div>
                            <div className={"bg-white mt-32 ml-20  h-auto relative left-60  flex  mt-10 h-52 w-60 w-full shadow-2xl"}><p className={"text-4xl ml-auto mr-auto mt-auto mb-auto"}>40%</p></div>
                            <div className={"bg-white mt-32 ml-20  h-auto relative left-60  flex  mt-10 h-52 w-60 w-full shadow-2xl"}><p className={"text-4xl ml-auto mr-auto mt-auto mb-auto"}>40%</p></div>
                            <div className={" ml-20 relative  w-full left-72 top-32"}>
                                <ul className={"flex  w-60 flex-col text-center"}>
                                    <div className={"flex flex-row"}>
                                        <li><img width={800} height={800} src={HogeschoolRotterdam}/></li>
                                        <li>Hogeschool Rotterdam</li>
                                    </div>
                                    <div className={"flex flex-row"}>
                                        <li><img width={800} height={800} src={HogeschoolRotterdam}/></li>
                                        <li>Hogeschool Rotterdam</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className={"mt-20 w-full flex-col flex ml-64"}>
                            <h2 className={"text-4xl"}>Programmeer skills</h2>
                            <ul className={"flex relative mt-10   flex-row justify-around "}>
                                <li><img height={500} width={200} src={reactLogo}/></li>
                                <li><img height={500} width={400} src={LaravelLogo}/></li>
                            </ul>

                            {/*    content for the image slider*/}
                            <div>
                                {/*    the slider progress section*/}
                            </div>
                        </div>

                    </section>
                </header>
                <main className={"bg-blue mt-72 w-full h-96"}>
                    Cemrg
                    <section>
                        <div>
                            {/*    left side showing the schools and education*/}
                        </div>
                        <div>
                            {/*    here the skills as developer, using grid!*/}
                        </div>
                    </section>
                    <section>
                        <div>
                            {/*    here the content of the project and telling how to use specialize me during the projects*/}
                        </div>
                        <div>
                            {/*    project gallery here using grid!*/}
                        </div>
                        <div>
                            {/*    the connection between companies, duration and link to github repo*/}
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default App
