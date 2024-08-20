import Navigation from "../components/navigation/Navigation.jsx";
import HeaderImage from '../assets/knalrecept-header.jpg'
import ResearchIcon from '../assets/research-icon.png';
import KnalReceptLogo from '../../src/assets/knalrecept.png';
import AboutFace from '../assets/aboutface-book.jpg';
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
                    <img className={'w-24 ml-auto mr-auto'} src={KnalReceptLogo}/>
                    <div className={"flex justify-center"}>
                        <div className={"w-32 ml-5 mb-10 h-8 rounded pb-2 bg-gray-900 text-center text-white"}>
                            <h2 className={"text-4xl font-bold text-black"}>Knalrecept</h2>
                        </div>
                    </div>
                </div>
                <div className={"pt-20   pb-10 pl-10 pr-10 flex-col justify-around bg-white"}>
                    <div className={" pl-10 pr-10 flex-col justify-around bg-white"}><h3>Sustainable development
                        goal</h3>
                        <p>Zero hunger</p>
                        <p>AI</p>
                        <p>React Native/Express js</p>
                        <p>Leerjaar 2</p>
                    </div>
                    <div className={'pl-8 mt-10'}>
                        <h3 className={'font-bold'}>Omschrijving:</h3>
                        <p className={'mt-2'}>Slim boodschappen doen met kortingsproducten en AI-gegenereerde
                            recepten.</p>
                        <p className={'mt-5'}>KNALRECEPT is een app ontworpen met een speciale focus op Rotterdammers
                            met een laag inkomen, maar toegankelijk voor iedereen in Nederland. De app helpt gebruikers
                            om geld te besparen op boodschappen door producten met korting van verschillende
                            boodschappen winkels te tonen en gaat verder door AI-gegenereerde recepten aan te bieden op
                            basis van deze kortingsproducten.</p>
                        <p className={'mt-5'}>Met KNALRECEPT hebben gebruikers een hulpmiddel om voordelig boodschappen
                            te doen. De app biedt een overzicht van producten die momenteel met korting worden
                            aangeboden in verschillende supermarkten. Dit maakt het gemakkelijk om te zien waar je het
                            meeste kunt besparen.</p>
                        <p className={'mt-5'}>Wat KNALRECEPT echt uniek maakt, is het gebruik van AI om recepten te
                            creëren. De app genereert heerlijke en praktische recepten op basis van de kortingsproducten
                            die beschikbaar zijn. Dit helpt gebruikers niet alleen om geld te besparen, maar ook om
                            creatief en gevarieerd te koken met voordelige ingrediënten. De app is ontworpen met
                            toegankelijkheid in gedachten. Hoewel de doelgroep Rotterdamens met een laag inkomen zijn,
                            is KNALRECEPT bruikbaar voor iedereen in Nederland. Iedereen kan profiteren van de kortingen
                            en recepten die de app biedt.</p>
                    </div>
                </div>
                <div className={'h-full'}><img className={"h-full"} src={HeaderImage}/></div>
            </section>
            <section className={'flex  justify-center'}>
                <div className={'flex w-full justify-around flex-col'}>
                    <h2 className={'text-2xl text-center font-bold'}><img className={'ml-auto mr-auto'}
                                                                          src={ResearchIcon}/>Specialize me -
                        Onderzoekende technoloog</h2>
                    <div className="grid grid-cols-6 pl-52 mt-5 mb-5 flex grid-rows-6 gap-4">
                        <div className="col-span-2 pt-3 pb-10  row-span-2 bg-off-white shadow-xl"><h1
                            className={'text-center font-bold'}>Customer insights, interviews & surveys</h1>
                            <div className={'pl-10 mt-4 pr-10'}>
                                <p>Gedurende het project was het de bedoeling dat er een richting werd gekozen voor het
                                    vak Specialize me. </p>
                                <p className={'mt-3'}>Zelf heb ik ervoor gekozen om aan de slag te gaan als
                                    onderzoekende technoloog. Als onderzoekende technoloog wilde ik voornamelijk
                                    focussen op het onderwerp customer insights, interviews & surveys , wat tijdens de
                                    les aanbod kwam. </p>
                                <p className={'mt-3'}> In de les werd behandelt waar je rekening mee moet houden als je
                                    een survey of interview opstelt en wat voor techniecken je kan toepassen als je
                                    specifieke antwoorden wilt krijgen voor een bepaald onderzoek </p>
                            </div>
                        </div>
                        <div
                            className="col-span-2 row-span-2 col-start-4 pt-3  bg-off-white shadow-xl pr-3 w-full row-start-2">
                            <h1 className={"text-center font-bold"}>About face</h1>
                            <div className={'pl-10  pb-10 mt-4 pr-10'}>
                                <p>Het boek wat ik gekozen had voor Specialize me was About face. Dit boek gaat voornamelijk over wat de belangrijke concepten zijn om een interactie ontwerp te ontwikkelen voor een gebruiker. </p>
                                <img className={'w-44 pt-5 pb-5 ml-auto mr-auto'} src={AboutFace}/>
                                <p className={'mt-3'}>Het hoofdstuk waar ik mij vooral op had gefocust was design research. Hier ging het voornamelijk wat de voor -en nadelen zijn van kwalitieve en kwantitieve gegevens. Kwantativieve gevens geeft een indicatie over wie je doelgroep is en bij kwalitieve gegevens krijg je een specifieker antwoord op je onderzoeksvragen.</p>

                            </div>
                        </div>
                        <div className="col-span-2 pt-3 row-span-2 bg-off-white shadow-xl col-start-1 row-start-4"><h1
                            className={'text-center font-bold'}>Toepassing</h1></div>
                        <div className="col-span-2 pt-3 row-span-2  bg-off-white shadow-xl col-start-4 row-start-5"><h1
                            className={'text-center font-bold'}>Reflectie</h1>
                            <div className={'pl-10  pb-10 mt-4 pr-10'}>
                                <p>Als onderzoekende technoloog vond ik dat ik een goede bijdrage heb geleverd aan het team. Ik was actief bij de meetings en stelde vragen als er iets onduidelijk was. Wat ik wel wat minder goed vond gaan waren de interviews, want ik vond het nog best wel spannend om mensen te interviewen die ik niet ken. Hierdoor stelde ik de interviews uit.  </p>
                                <p className={'mt-3'}>Doordat ik de interviews heb gedaan weet ik nu veel meer over het probleem waar mensen tegen aan lopen en zie ik ook dat het een stuk effectiever is dan een survey.  De lessen hebben mij geholpen hoe ik een interview kan opzetten en waar ik rekening mee moet houden als ik een interview ga houden..</p>

                            </div></div>
                    </div>
                </div>
            </section>
        </>
    )
}