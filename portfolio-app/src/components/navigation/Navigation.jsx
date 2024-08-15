

export default function Navigation() {

    return(
        <>
            <section className={"relative h-32 bg-light-purple"}>
                <nav className={'relative top-24'}>
                    <ul className={'flex text-2xl text-light-blue justify-around'}>
                        <li className={"cursor-pointer"}>Home</li>
                        <li className={'cursor-pointer'}>Persona</li>
                        <li className={'cursor-pointer'}>Projects</li>
                        <li className={'cursor-pointer'}>Software skills</li>
                    </ul>
                </nav>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#51414F" fill-opacity="1" d="M0,288L120,282.7C240,277,480,267,720,240C960,213,1200,171,1320,149.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            </section>
        </>
    )
}