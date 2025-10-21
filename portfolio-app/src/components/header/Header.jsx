import Profile from "../../assets/profile-picture.jpg";
import HogeschoolRotterdam from "../../assets/hogeschool-rotterdam.png";
import reactLogo from "../../assets/react.svg";
import LaravelLogo from "../../assets/laravel-logo.png";
import DotNetLogo from '../../assets/dotnet.png';
import DeltaNLogo from '../../assets/delta-n-logo.png';
import DeltaNTeamImage from '../../assets/DeltaN-teamfoto.jpg'
import IamITLogo from '../../assets/iamITlogo.png';
import CompetaLogo from '../../assets/competa-logo.png';
import Navigation from "../navigation/Navigation.jsx";

export default function Header() {

    return (
        <>
            <header className={"h- w-auto grid grid-cols-2  col-span-3 bg-white m-0"}>
                <section
                    className={"h-full   bg-dark-blue shadow-2xl  pt-14 grid grid-cols-2 grid-rows-1 col-span-3"}>
                    <div className={"text-light-blue m-auto mr-auto"}>
                        <div className={"flex flex-col  w-full  pl-20  pr-10 justify-evenly"}>
                            <h1 className={"text-5xl "}>Portfolio</h1>
                            <p className={"mt-6 "}>Beste bezoeker, mijn naam is Pascal Heikamp en ik ben op dit moment student aan Hogeschool Rotterdam. De opleiding die ik hier volg is Creative media & game technologies</p>
                            <p className={'mt-4'}>Op mijn portfolio website ziet u alle stages en opleidingen die afgerond heb en ook de projecten waar ik aangewerkt heb. Als u op project klikt via e de navigatie of u scrollt verder op de hoofdpagina naar projects dan kunt u mijn meest recente project zien.</p>
                            <p className={'mt-4'}>Als u op de pagina van projects komt ziet u informatie over het project en zal ik ook toelichten hoe ik als onderzoekende technoloog aan de slag ben gegaan. Ik wens u veel kijkplezier!</p>
                        </div>
                    </div>
                    <div className={'flex w-auto mb-10 mr-40 pl-10   justify-center mt-44  h-auto'}>

                        <img className={'w-96 relative bottom-40 mt-32 h-96 rounded-full'} src={Profile}/>
                    </div>
                </section>
                <section className={""}>
                    <div className={"flex flex-col mt-20 justify-between"}>
                        <h2 className={"absolute left-60 text-4xl mt-14"}>Opleidingen</h2>
                        <div
                            className={"bg-white  mt-32 ml-20  h-auto relative left-60  flex  mt-10 h-60 w-60 w-full shadow-2xl"}>
                            <img className={'absolute w-44 h-32'} src={HogeschoolRotterdam}/>
                            <p className={"text-4xl ml-auto text-center mr-auto mt-auto mb-auto"}>Hogeschool Rotterdam<p
                                className={'text-2xl mt-6 text-center'}>Creative media & game technologies</p>
                                <p className={"text-center mt-3 text-xl"}>2024 - heden</p></p>
                        </div>
                        <div
                            className={"bg-white mt-32 ml-20  h-auto relative left-60  flex  mt-10 h-60 w-60 w-full shadow-2xl"}>
                            <img className={'absolute w-44 h-32'} src={HogeschoolRotterdam}/>
                            <p className={"text-4xl ml-auto text-center mr-auto mt-auto mb-auto"}>Rotterdam Academy<p
                                className={'text-2xl mt-6 text-center'}>AD Software Development</p>
                                <p className={"text-center mt-3 text-xl"}>2022 - 2024</p></p>
                        </div>
                        <div
                            className={"bg-white mt-32 ml-20  h-auto relative left-60  flex  mt-10 h-60 w-60 w-full shadow-2xl"}>
                            <img className={'absolute w-44 h-32'} src={HogeschoolRotterdam}/>
                            <p className={"text-4xl ml-auto text-center mr-auto mt-auto mb-auto"}>Techniek college
                                Rotterdam<p
                                    className={'text-2xl mt-6 text-center'}>Applicatie en media ontwikkelaar</p>
                                <p className={"text-center mt-3 text-xl"}>2019 - 2022</p></p>
                        </div>
                    </div>
                    <div className={"grid grid-cols-2"}>
                        <h2 className={"absolute left-60 text-4xl mt-14"}>Stages</h2>

                        <div
                            className={"bg-white mt-32 ml-20 flex-col  h-auto relative left-60  flex  mt-10 h-auto w-60 w-full shadow-2xl"}>
                            <p className={"text-4xl pt-5 pb-5 ml-auto mr-auto mt-auto mb-auto"}><img src={DeltaNLogo}/>
                            </p>
                            <div className={'bg-steal-blue pl-5 pr-5 pb-5 pt-5 h-auto'}>
                                <p>Omschrijving hier</p>
                                <div className={"mt-10"}>
                                    <h3 className={'text-lg font-bold'}>Programmeertalen & frameworks</h3>
                                    <ul className={'flex justify-around'}>
                                        <li>C#</li>
                                        <li>JavaScript</li>
                                        <li>Dotnet</li>
                                        <li>Angular#</li>
                                    </ul>
                                </div>
                                <div className={'flex justify-end mt-5 '}>
                                    <button className={"bg-navy-blue h-10 pl-3 pr-3 text-white"}>Bekijk de website
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"bg-navy-blue mt-32 flex h-auto relative left-96 mt-10 h-52  shadow-2xl"}>
                            <div className={'bg-gray-white w-full pl-5 pr-5 pb-5 pt-5 h-auto'}>
                                <h2 className={'text-2xl text-center'}>Delta-N</h2>
                                <div className={"mt-10 flex justify-center "}>
                                       <img src={DeltaNTeamImage}/>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"bg-white mt-32 ml-20 flex-col  h-auto relative left-60  flex  mt-10 h-auto w-60 w-full shadow-2xl"}>
                            <p className={"text-4xl pt-5 pb-5 ml-auto mr-auto mt-auto mb-auto"}><img src={IamITLogo}/>
                            </p>
                            <div className={'bg-steal-blue pl-5 pr-5 pb-5 pt-5 h-auto'}>
                                <p>Omschrijving hier</p>
                                <div className={"mt-10"}>
                                    <h3 className={'text-lg font-bold'}>Programmeertalen & frameworks</h3>
                                    <ul className={'flex justify-around'}>
                                        <li>C#</li>
                                        <li>JavaScript</li>
                                        <li>Dotnet</li>
                                        <li>Angular#</li>
                                    </ul>
                                </div>
                                <div className={'flex justify-end mt-5 '}>
                                    <button className={"bg-navy-blue h-10 pl-3 pr-3 text-white"}>Bekijk de website
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"bg-navy-blue mt-32 flex h-auto relative left-96 mt-10 h-52  shadow-2xl"}>
                            <div className={'bg-gray-white w-full pl-5 pr-5 pb-5 pt-5 h-auto'}>
                                <h2 className={'text-2xl text-center'}>IamIT</h2>
                                <div className={"mt-10 flex justify-center "}>
                                    <img src={DeltaNTeamImage}/>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"bg-white mt-32 ml-20 flex-col  h-auto relative left-60  flex  mt-10 h-auto w-60 w-full shadow-2xl"}>
                            <p className={"text-4xl pt-5 pb-5 ml-auto mr-auto mt-auto mb-auto"}><img src={CompetaLogo}/>
                            </p>
                            <div className={'bg-steal-blue pl-5 pr-5 pb-5 pt-5 h-auto'}>
                                <p>Omschrijving hier</p>
                                <div className={"mt-10"}>
                                    <h3 className={'text-lg font-bold'}>Programmeertalen & frameworks</h3>
                                    <ul className={'flex justify-around'}>
                                        <li>C#</li>
                                        <li>JavaScript</li>
                                        <li>Dotnet</li>
                                        <li>Angular#</li>
                                    </ul>
                                </div>
                                <div className={'flex justify-end mt-5 '}>
                                    <button className={"bg-navy-blue h-10 pl-3 pr-3 text-white"}>Bekijk de website
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"bg-navy-blue mt-32 flex h-auto relative left-96 mt-10 h-52  shadow-2xl"}>
                            <div className={'bg-gray-white w-full pl-5 pr-5 pb-5 pt-5 h-auto'}>
                                <h2 className={'text-2xl text-center'}>Competa</h2>
                                <div className={"mt-10 flex justify-center "}>
                                    <img src={DeltaNTeamImage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-10 w-full flex-col flex ml-64"}>
                        <h2 className={"text-4xl"}>Programmeer skills</h2>
                        <ul className={"flex relative mt-10   flex-row justify-around "}>
                            <li><img height={500} width={200} src={reactLogo}/></li>
                            <li><img height={500} width={400} src={LaravelLogo}/></li>
                            <li><img height={300} width={200} src={DotNetLogo}/></li>
                        </ul>
                        {/*    content for the image slider*/}
                        <div>
                            {/*    the slider progress section*/}
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}