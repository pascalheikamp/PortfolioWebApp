import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Knalrecept from './assets/knalrecept.jpg'
import Header from "./components/header/Header.jsx";
import Profile from './assets/profile-picture.jpg';
import ReactLogo from './assets/react-logo.png'
import LaravelLogo from './assets/laravel-logo.png'
import HogeschoolRotterdam from './assets/hogeschool-rotterdam.png'
import BackgroundImage from './/assets/background-image.jpg'
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={'bg-ford-blue'}>
                <Navigation/>
                <Header/>
                <main className={"bg-ford-blue  w-full h-full"}>
                    <section className={'flex flex-col  mt-auto mb-auto  mt-20 '}>
                        <h1 className={'text-4xl text-center text-light-blue'}>Projects</h1>
                        <div className="grid grid-cols-5 mt-10 grid-rows-5 gap-3">
                            <div className="col-span-2 h-64 bg-white row-span-2"></div>
                            <div className="row-span-3 bg-blue-green col-start-1 row-start-3">2</div>
                            <div className="row-span-3 -full w-full overflow-hidden  bg-fixed opacity-1 transition duration-300  ease-in-out hover:opacity-80 bg-transparent col-start-3 row-start-1"><img className={"h-full  max-w-xs "} src={Knalrecept}/></div>
                            <div className="row-span-3 bg-steal-blue col-start-2 row-start-3">5</div>
                            <div className="col-span-2 bg-white row-span-2 col-start-3 row-start-4">6</div>
                            <div className="row-span-3 bg-blue-green col-start-4 row-start-1">7</div>
                            <div className="row-span-5 bg-blue-green col-start-5 row-start-1">9 </div>
                        </div>

                    </section>
                </main>
                <footer className={'bg-blue h-96'}>
eyy45y
                </footer>
            </div>
        </>
    )
}

export default App
