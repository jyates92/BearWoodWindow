import React from "react";
import styled from "styled-components";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import filetext from "../../assets/file-text.svg";

// Line below is to import photo's
// import resume from "../../assets/Resume.jpg";

const Wrapper = styled.footer`
  text-align: center;
  padding: 40px;
  background: #357F95;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-center: center;
`;

const Links = styled.div`
  display: flex;
  flex-diretion: row;
  a {
    padding: 5px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      
      <Links>
        <a href="https://github.com/jyates92">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jeremiah-yates/">
          <img src={linkedin} />
        </a>
        <a href="https://drive.google.com/file/d/1BxEdYOZqjnbzRh7T9cXkd_GL6a-rzZiP/view">
          <img src={filetext} />
        </a>
        <hr></hr>
        <p>Bear Wood Windows 2020 ©</p>

      </Links>
    </Wrapper>
  );
};

export default Footer;
