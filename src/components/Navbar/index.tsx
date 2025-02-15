import { Container } from "@mui/material";
import { IconMail } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <Container maxWidth="lg">
      <div className="nav-container flex-row align-center width-100 justify-between">
        <div className="left align-center flex-row">
          <IconMail color="red" size={50} />
        </div>
      </div>
    </Container>
  );
}
