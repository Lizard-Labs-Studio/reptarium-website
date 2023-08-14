import About from "../components/About/About";
import DiscordBlock from "../components/DiscordBlock/DiscordBlock";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import Lizards from "../components/Lizards/Lizards";
import Roadmap from "../components/Roadmap/Roadmap";
import Slider from "../components/Slider/Slider";
import SliderBlock from "../components/SliderBlock/SliderBlock";
import styles from "../styles/Home.module.scss";
import client from "../contentful";
import Head from "next/head";

export default function Home({ home, imageSlider, lizards, roadmap }) {
  const {
    aboutTitle,
    aboutText,
    imageSliderTitle,
    lizardsTitle,
    discordTitle,
    discordSubtitle,
    discordLink,
    roadmapTitle,
  } = home.fields;

  return (
    <div>
      <Head>
        <title>Reptarium</title>
      </Head>

      <HeroBlock />
      <About aboutTitle={aboutTitle} aboutText={aboutText} />
      <SliderBlock
        imageSliderTitle={imageSliderTitle}
        imageSlider={imageSlider}
      />
      <Lizards lizardsTitle={lizardsTitle} lizards={lizards} />
      <DiscordBlock
        discordTitle={discordTitle}
        discordSubtitle={discordSubtitle}
        discordLink={discordLink}
      />
      <Roadmap roadmapTitle={roadmapTitle} roadmap={roadmap} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const home = await client.getEntries({
    content_type: "homePage",
    limit: 1,
  });

  const imageSlider = await client.getEntries({
    content_type: "imageSlider",
  });

  const lizards = await client.getEntries({
    content_type: "lizards",
  });

  const roadmap = await client.getEntries({
    content_type: "roadMap",
  });

  const [homePage] = home.items;

  return {
    props: {
      home: homePage,
      imageSlider: imageSlider.items,
      lizards: lizards.items,
      roadmap: roadmap.items,
    },
  };
};
