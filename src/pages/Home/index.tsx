import React from "react";
import { Container } from "@mui/material";

import "./styles.scss";
import {
  ActionIcon,
  Button,
  Card,
  HoverCard,
  Paper,
  Text,
} from "@mantine/core";
import { Colors, Images } from "../../lib/data";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <div className="home-container">
        <div className="jumbotron flex-col">
          <div className="flex-row align-center row">
            <Text className="text">Hi, I'm</Text>
            <img src={Images.AvatarImage} alt="" className="avatar" />
            <Text className="text">Oluwaferanmi!</Text>
          </div>
          <div className="flex-row align-center row">
            <Text className="text">I'm a</Text>&nbsp;
            <Text className="text">Software Developer</Text>
          </div>
          <HoverCard>
            <HoverCard.Target>
              <Button
                variant="outline"
                className="btn"
                leftSection={<span className="loader"></span>}
                color={Colors.GrayPrimary}
                c={Colors.BlackPrimary}
                fw={400}
                fz={17}
              >
                Open to Work
              </Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <div className="flex-row align-center">
                <ActionIcon size={50} variant="subtle">
                  <IconBrandWhatsapp size={30} color={Colors.WhatsappPrimary} />
                </ActionIcon>
                <ActionIcon size={50} variant="subtle">
                  <IconMail size={30} />
                </ActionIcon>
              </div>
            </HoverCard.Dropdown>
          </HoverCard>
          <Text fw={500} fz={20} mt={20}>
            Feel free to explore my portfolio and reach out. I'd love to
            connect!
          </Text>
        </div>
      </div>
    </Container>
  );
};
export default Home;
