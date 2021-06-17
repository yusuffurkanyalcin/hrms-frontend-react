import React from "react";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navigation() {
  const isSigned = true;

  return (
    <div>
      <Menu inverted size="large">
        <Container>
          <Menu.Menu position="left">
            <Menu.Item content="HRMS.NET" style={{ color: "orange" }} />
          </Menu.Menu>

          <Menu.Item
            content="İş Ara"
            icon={<Icon name="search" inverted circular link />}
          ></Menu.Item>
          <Menu.Item>
            <Button content="Kariyer Rehberi" secondary />
          </Menu.Item>
          <Menu.Item>
            <Button content="Pozisyon Rehberi" secondary />
          </Menu.Item>
          <Menu.Menu position="right">
            {isSigned ? <SignedIn /> : <SignedOut />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
