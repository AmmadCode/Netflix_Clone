import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCard/TitleCard.jsx";
import Footer from "../../components/Footer/Footer.jsx";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className="banner_img" />
        <div className="hero_caption">
          <img src={hero_title} alt="Hero Title" className="caption_img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern istanbul embarks on a quest to save the city form an
            immortal enemy.
          </p>
          <div className="hero_btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCard title={"Trending Now"} category={"popular"} />
        <TitleCard title={"Top Rated"} category={"upcoming"} />
        <TitleCard title={"Action Movies"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
