import React from "react";
import { Container } from "@mui/material";

import "./styles.scss";
import { Button, HoverCard, Text } from "@mantine/core";
import { Images } from "../../lib/data";
const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <div className="home-container">
        <div className="jumbotron flex-col">
          <div className="flex-row align-center row">
            <Text className="text">Hi, I'm</Text>{" "}
            <img src={Images.AvatarImage} alt="" className="avatar" />
            <Text className="text">Ajiboye Oluwaferanmi</Text>
          </div>
          <div className="flex-row align-center row">
            <Text className="text">I'm a</Text>
            <Text className="text">Software Developer</Text>
          </div>
          <HoverCard>
            <HoverCard.Target>
              <Button
                variant="outline"
                className="btn"
                leftSection={<span className="loader"></span>}
              >
                Open to Work
              </Button>
            </HoverCard.Target>
          </HoverCard>
        </div>
      </div>
    </Container>
  );
};
export default Home;
