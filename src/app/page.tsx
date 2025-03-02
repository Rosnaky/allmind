import { ArrowRightIcon } from "@heroicons/react/16/solid";
import AppBar from "./components/app_bar";
import CaseStudy from "./components/case_study";
import DeliverOnDemandTile from "./components/deliver_on_demand_tile";
import Headline from "./components/headline";
import HowItWorksTile from "./components/how_it_works_tile";
import InfrastructureTile from "./components/infrastructure_tile";
import Persuade from "./components/persuade";
import Questions from "./components/questions";
import SeeWhatsPossibleTile from "./components/see_whats_possible_tile";
import TitleTile from "./components/title_tile";
import Image from "next/image";
import Footer from "./components/footer";
import Reviews from "./components/reviews";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-host-grotesk)]">
            <Headline/>
            <AppBar/>
            <TitleTile/>
            <HowItWorksTile/>
            <SeeWhatsPossibleTile/>
            <Reviews/>
            <DeliverOnDemandTile/>
            <InfrastructureTile/>
            <CaseStudy/>
            <Persuade/>
            <Questions/>
            <Footer/>    
        </div>
    );
}
