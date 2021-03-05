import React from "react";
import styled from "styled-components";

import bear from "../../assets/bear.gif";

const Wrapper = styled.div`
  background: #357F95;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.div`
  img {
    width: 150px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  position: relative;
  min-width: 250px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
`;

const Info = styled.div`
  color: white;
  padding-left: 50px;
`;

const Bio = () => {
  return (
    <Wrapper>
      <Content>
        <Avatar>
          <img src={bear} />
        </Avatar>
        <Info>
          <h2>Bear Wood Windows!</h2>
          <p>
           Welcome to Bear Wood Windows, the forefront in window renovation.{" "}
          </p>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Bio;
