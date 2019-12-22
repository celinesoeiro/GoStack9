import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification unread>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification unread>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification unread>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}