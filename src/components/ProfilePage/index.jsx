import React from 'react'

import Feed from '../Feed'

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    EditButton,
    LocationIcon,
    CakeIcon,
    Followage,
} from './styles';

function ProfilePage() {
  return (
    <Container>
        <Banner>
            <Avatar></Avatar>
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
            <h1>Guilherme Diniz</h1>
            <h2>@guilhermedinizl</h2>

            <p>
                Frontend Developer
            </p>

            <ul>
                <li>
                    <LocationIcon></LocationIcon>
                    Rio de Janeiro, Brasil
                </li>
                <li>
                    <CakeIcon></CakeIcon>
                    Nascido(a) em 9 de Agosto de 2002
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>500 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed />
    </Container>
  )
}

export default ProfilePage