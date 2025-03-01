import AppBar from "./components/app_bar";
import Headline from "./components/headline";
import HowItWorksTile from "./components/how_it_works_tile";
import TitleTile from "./components/title_tile";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-host-grotesk)]">
      <Headline/>
      <AppBar/>
      <TitleTile/>
      <HowItWorksTile/>
    </div>
  );
}
