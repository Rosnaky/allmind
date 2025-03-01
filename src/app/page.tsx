import AppBar from "./components/app_bar";
import Headline from "./components/headline";
import TitleTile from "./components/title_tile";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-host-grotesk)]">
      <Headline/>
      <AppBar/>
      <TitleTile/>
    </div>
  );
}
