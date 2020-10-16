import React, { useState } from "react";
import Video from "../../videos/sea-video.mp4"; // video from https://www.pexels.com/
import Img from "../../images/selfie-1.JPG";
// import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ContactButton,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <img
          src={Img}
          alt="selfie"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "2px 2px 5px #111",
          }}
        ></img>
        <HeroH1>Allyn Vo</HeroH1>
        <HeroP>Software Engineer based in Seattle, Washington.</HeroP>
        <HeroBtnWrapper>
          <ContactButton
            href="mailto:allynvo@yahoo.com"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact {hover ? <ArrowForward /> : <ArrowRight />}
          </ContactButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
