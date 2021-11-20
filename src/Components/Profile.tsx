import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { colours, Colour, SharedSettings } from '../Shared/SharedStyles';

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas: 
    'pic name'
    'pic nickname'
    'pic title'
    'pic .';
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 170px 1fr;
  }

  @media(max-width: 380px) {
    grid-template-columns: 120px 1fr;
  }
`;

interface ImageProps {
  image?: imageLib;
  smallImage?: boolean;
  accent: Colour;
}

const ProfilePic = styled.div`
  grid-area: pic;
  background-color: ${colours.light};
  background-image: url(${(p: ImageProps) => p.image ? ImagesDesktop[p.image] : ImagesDesktop['FDL_Purple'] });
  background-size: ${(p: ImageProps) => p.smallImage ? '80%' : 'cover' };
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid ${(p: INameProps) => colours[p.accent]};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 70px;
    width: 200px; 
    background: ${(p: INameProps) => colours[p.accent]};;
    left: 50%;
    top: -5px;
    z-index: -1;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    height: 150px;
    width: 150px;
    &:before { height: 50px; }
  }

  @media(max-width: 380px) {
    height: 100px;
    width: 100px;
    &:before { width: 150px; }
  }
`;

interface INameProps {
  accent: Colour;
}

const Name = styled.div`
  grid-area: name;
  font-weight: 400;
  font-size: 2em;
  color: ${colours.light};
  background: ${(p: INameProps) => colours[p.accent]};
  display: flex;
  align-items: center;
  height: 70px;
  border-radius: 100px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 1.5em;
    height: 50px;
  }

  @media(max-width: 380px) {
    font-size: 1.2em;
  }
`;

const Nickname = styled.div`
  grid-area: nickname;
  font-weight: 400;
  font-size: 1.4em;
  height: 50px;
  display: flex;
  align-items: flex-end;
  
  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 1em;
    height: 30px;
  }

  @media(max-width: 380px) {
    font-size: 0.9em;
    height: 23px;
  }
`;

const Title = styled.div`
  grid-area: title;
  font-size: 1.4em;
  font-weight: 600;
  height: 45px;
  display: flex;
  align-items: flex-end;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 1em;
    height: 30px;
  }

  @media(max-width: 380px) {
    font-size: 0.9em;
    height: 23px;
  }
`;

interface IProps {
  image?: imageLib;
  name: string;
  nickname: string;
  title: string;
  accent: Colour;
  smallImage?: boolean;
}

const Profile: FC<IProps> = ({image, name, nickname, title, accent, smallImage}: IProps) => {
  return (
    <ProfileContainer>
      <ProfilePic image={image} accent={accent} smallImage={smallImage} />
      <Name accent={accent}>{name}</Name>
      {(nickname !== "...") ? <Nickname>"{nickname}"</Nickname> : null}
      <Title>{title}</Title>
    </ProfileContainer>
  );
}

export default Profile;