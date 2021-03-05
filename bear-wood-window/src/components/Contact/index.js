import React, { useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import Confetti from "react-dom-confetti";

const Wrapper = styled.div`
  background: #00BFFF;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  opacity: .5;
`;

const Content = styled.div`
  max-width: 400px;
  width: 100%;F
  text-align: center;
  margin: 0 auto;
  span {
    color: #2b8a3e;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    copy("jeremiahyates1992@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <Wrapper id="contact">
      <Content>
        <h1>Contact Us</h1>
        <Confetti active={copied} />
        <p>
          Simply click <span onClick={() => copyEmail()}>here</span> to copy our
          email to your clipboard!
        </p>
      </Content>
    </Wrapper>
  );
};

export default Contact;
