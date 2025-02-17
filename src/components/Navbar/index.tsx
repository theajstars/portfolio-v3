import { Container } from "@mui/material";
import { Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { Colors } from "../../lib/data";

import "./styles.scss";

export default function Navbar() {
  return (
    <Container maxWidth="lg">
      <div className="nav-container flex-row align-center width-100 justify-between">
        <div className="left align-center flex-row">
          <IconMail stroke={1.4} color={Colors.BlackPrimary} size={40} />
          <Text
            className="email"
            onClick={() => {
              window.open("mailto:me@theajstars.tech");
            }}
          >
            me@theajstars.tech
          </Text>
        </div>
      </div>
    </Container>
  );
}
