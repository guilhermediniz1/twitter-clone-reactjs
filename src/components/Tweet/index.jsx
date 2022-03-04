import React from 'react';

import { 
  Container, 
  Retweeted, 
  UserIcon,
  Body, 
  Avatar, 
  Content, 
  Header,
  Dot,
  Description, 
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';
import RocketseatIcon from '../RocketseatIcon/index'

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <UserIcon>
          <RocketseatIcon />
        </UserIcon>
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>1 de mar</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>
        
          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon></CommentIcon>
              12
            </Status>
            <Status>
              <RetweetIcon></RetweetIcon>
              12
            </Status>
            <Status>
              <LikeIcon></LikeIcon>
              12
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;