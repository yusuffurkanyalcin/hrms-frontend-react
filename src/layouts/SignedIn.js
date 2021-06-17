import React from "react";
import { Dropdown, Icon, Image, Menu } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item position="right">
        <Image
          src="data:image/jpeg;base64,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"
          avatar
        />
        <Dropdown
          pointing="top right"
          text="Profilim"
          style={{ paddingRight: 15 }}
          className="link item"
        >
          <Dropdown.Menu>
            <Dropdown.Item icon={<Icon name="info" />} text="Bilgilerim" />
            <Dropdown.Item icon={<Icon name="sign out" />} text="Çıkış Yap" />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown pointing="top right" text="İşlemlerim" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item text="İş Başvuru" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
