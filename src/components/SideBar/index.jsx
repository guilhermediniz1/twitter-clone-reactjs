import React from 'react';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

import List from '../List'
import FollowSugestion from '../FollowSugestion';
import News from '../News';

function SideBar() {
  return (
      <Container>
          <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"></SearchInput>
            <SearchIcon></SearchIcon>
          </SearchWrapper>

          <Body>
              <List title="Talvez você curta"
              elements={[
                <FollowSugestion 
                  name="Guilherme Rodz"
                  nick="@guilherme_rodz"
                />,
                <FollowSugestion 
                  name="Guilherme Rodz"
                  nick="@guilherme_rodz"
                />,
                <FollowSugestion 
                  name="Guilherme Rodz"
                  nick="@guilherme_rodz"
                />
              ]}/>
              
              <List title="O que está acontecendo"
              elements={[
                <News />,
                <News />,
                <News />

              ]}/>
          </Body>
      </Container>
  );
}

export default SideBar;