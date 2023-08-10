import About from "../components/About/About";
import DiscordBlock from "../components/DiscordBlock/DiscordBlock";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import Lizards from "../components/Lizards/Lizards";
import Slider from "../components/Slider/Slider";
import SliderBlock from "../components/SliderBlock/SliderBlock";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <HeroBlock />
      <About />
      <SliderBlock />
      <Lizards />
      <DiscordBlock />
    </div>
  );
}
