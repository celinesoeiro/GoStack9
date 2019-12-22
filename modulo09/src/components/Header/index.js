import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logoRoxo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Celine</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Celine"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
