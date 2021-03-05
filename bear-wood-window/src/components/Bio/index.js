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
          <h2>About Us</h2>
          <p>         
            Established in ___, Bear Wood Windows has
            cemented itself as a leader in historical, 
            commercial window renovations. Bear is one of a small 
            handful of companies that both restore and
            replicate historical windows. Even within this 
            niche, Bear is at the forefront of its industry, 
            having worked on buildings such as the Starbucks
            Reserve Roastery and King Street Station.
            Rooted in Tacoma, WA, Bear’s projects can 
            be found abundantly within the Pacific Northwest 
            and as far East as Yellowstone National Park, WY.{" "}
          </p>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Bio;
