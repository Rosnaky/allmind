import AppBar from "./components/app_bar";
import DeliverOnDemandTile from "./components/deliver_on_demand_tile";
import Headline from "./components/headline";
import HowItWorksTile from "./components/how_it_works_tile";
import InfrastructureTile from "./components/infrastructure_tile";
import SeeWhatsPossibleTile from "./components/see_whats_possible_tile";
import TitleTile from "./components/title_tile";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-host-grotesk)]">
      <Headline/>
      <AppBar/>
      <TitleTile/>
      <HowItWorksTile/>
      <SeeWhatsPossibleTile/>

      <DeliverOnDemandTile/>
      <InfrastructureTile/>
    </div>
  );
}
