import React from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";
export default function SignedOut() {
  return (
    <div>
      <Menu.Item>
        <Button color="purple">Üye Ol</Button>
        <Button color="purple" style={{marginLeft:'0.5em'}}>Üye Girişi</Button>
        <Dropdown item text="İş Veren" pointing="top" style={{marginLeft:"0.5em"}}>
          <Dropdown.Menu>
            <Dropdown.Item>Giriş Yap</Dropdown.Item>
            <Dropdown.Item>Ücretsiz Dene</Dropdown.Item>
            <Dropdown.Item>Sizi Arayalım</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
