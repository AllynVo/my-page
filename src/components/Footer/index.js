import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>More</FooterLinkTitle>
              {/* If linking off the site, use <a></a> */}
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">Linked In</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>More</FooterLinkTitle>
              {/* If linking off the site, use <a></a> */}
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">Linked In</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>More</FooterLinkTitle>
              {/* If linking off the site, use <a></a> */}
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">Linked In</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>More</FooterLinkTitle>
              {/* If linking off the site, use <a></a> */}
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">Linked In</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              AV
            </SocialLogo>
            <WebsiteRights>Allyn Vo © {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" targets="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/allyn-vo"
                targets="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
