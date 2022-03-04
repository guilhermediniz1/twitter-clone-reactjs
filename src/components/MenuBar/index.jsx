import React from 'react'

import {
    Container, 
    TopSide, 
    Logo,
    MenuButton, 
    HomeIcon, 
    BellIcon, 
    EmailIcon,
    FavoriteIcon, 
    ProfileIcon,
    TweetButton,
    ExitIcon,
    BotSide,
    Avatar,
    ProfileData,
} from './styles'

function MenuBar(){
    return (
        <Container>
            <TopSide>
            <Logo />
                <MenuButton>
                    <HomeIcon></HomeIcon>
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon></BellIcon>
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon></EmailIcon>
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon></FavoriteIcon>
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon></ProfileIcon>
                    <span>Perfil</span>
                </MenuButton>
                <TweetButton outlined>
                    <span>Tweetar</span>
                </TweetButton>
            </TopSide>
            <BotSide>
                <Avatar />

                <ProfileData>
                    <strong>Guilherme Diniz</strong>
                    <span>@guilhermedinizl</span>
                </ProfileData>

                <ExitIcon/>
            </BotSide>
        </Container>
    );
}

export default MenuBar