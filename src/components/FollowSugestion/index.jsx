import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

function FollowSugestion({name, nick}) {
  return (
      <Container>
        <div>
          <Avatar></Avatar>
          <Info>
            <strong>{name}</strong>
            <span>{nick}</span>
          </Info>
        </div>

          <FollowButton outlined> <span>Seguir</span> </FollowButton>
      </Container>
  );
}

export default FollowSugestion;