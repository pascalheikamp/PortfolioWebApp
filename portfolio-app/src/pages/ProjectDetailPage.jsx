import Navigation from "../components/navigation/Navigation.jsx";
import HeaderImage from '../assets/knalrecept-header.jpg'
import './ProjectDetail.css';


export default function ProjectDetailPage() {

    return (
        <>
            <Navigation/>
            <section className={"detail-section pb-10 content grid  grid-cols-2 bg-gray-50 "}>
                <div className={"col-span-3 flex flex-col justify-around"}>
                    <div>
                        <img className={"header-image md:[clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_50%)] w-full"}
                             src={HeaderImage}/>
                    </div>
                    <div className={"flex justify-center"}>
                        <div className={"w-32 ml-5 mb-10 h-8 rounded pb-2 bg-gray-900 text-center text-white"}>
                            <h2 className={"text-4xl font-bold text-black"}>Knalrecept</h2>
                        </div>
                    </div>
                </div>
                <div className={"pt-20   pb-10 pl-10 pr-10 flex-col justify-around bg-white"}>
                    <div className={" pl-10 pr-10 flex-col justify-around bg-white"}><h3>Sustainable development goal</h3>
                        <p>Zero hunger</p>
                        <p>AI</p>
                        <p>React Native/Express js</p>
                        <p>Leerjaar 2</p>
                    </div>
                    <div className={'pl-8 mt-10'}>
                        <h3 className={'font-bold'}>Omschrijving:</h3>
                        <p className={'mt-2'}>Slim boodschappen doen met kortingsproducten en AI-gegenereerde recepten.</p>
                        <p className={'mt-5'}>KNALRECEPT is een app ontworpen met een speciale focus op Rotterdammers met een laag inkomen, maar toegankelijk voor iedereen in Nederland. De app helpt gebruikers om geld te besparen op boodschappen door producten met korting van verschillende boodschappen winkels te tonen en gaat verder door AI-gegenereerde recepten aan te bieden op basis van deze kortingsproducten.</p>
                        <p className={'mt-5'}>Met KNALRECEPT hebben gebruikers een hulpmiddel om voordelig boodschappen te doen. De app biedt een overzicht van producten die momenteel met korting worden aangeboden in verschillende supermarkten. Dit maakt het gemakkelijk om te zien waar je het meeste kunt besparen.</p>
                        <p className={'mt-5'}>Wat KNALRECEPT echt uniek maakt, is het gebruik van AI om recepten te creëren. De app genereert heerlijke en praktische recepten op basis van de kortingsproducten die beschikbaar zijn. Dit helpt gebruikers niet alleen om geld te besparen, maar ook om creatief en gevarieerd te koken met voordelige ingrediënten. De app is ontworpen met toegankelijkheid in gedachten. Hoewel de doelgroep Rotterdamens met een laag inkomen zijn, is KNALRECEPT bruikbaar voor iedereen in Nederland. Iedereen kan profiteren van de kortingen en recepten die de app biedt.</p>
                    </div>
                </div>
                <div className={'h-full'}><img className={"h-full"} src={HeaderImage}/></div>
            </section>
            <section className={'flex  justify-around'}>
             <h2 className={'text-2xl font-bold'}>Specialize me - Onderzoekende technoloog</h2>
            </section>
        </>
    )
}