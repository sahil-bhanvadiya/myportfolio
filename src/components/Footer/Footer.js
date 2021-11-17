import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1200' height='300' preserveAspectRatio='none' viewBox='0 0 1200 300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1158%26quot%3b)' fill='none'%3e%3crect width='1200' height='300' x='0' y='0' fill='rgba(213%2c 255%2c 251%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c115 C 80%2c124.8 240%2c173.2 400%2c164 C 560%2c154.8 640%2c71.2 800%2c69 C 960%2c66.8 1120%2c136.2 1200%2c153L1200 300L0 300z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1158'%3e%3crect width='1200' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
    </FooterSection>
  );
}

export default Footer;
