import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, Colour } from '../Shared/SharedStyles';
import calendarIcon from '../img/Calendar.svg';
import { useHistory } from 'react-router-dom';

const CalendarIcon = styled.div`
  width: 75px;
  height: 65px;
  margin-left: 25px;
  background-color: ${(p: CalendarProps) => colours[p.primary]};
  background-size: contain;
  mask: url(${calendarIcon});
  mask-size: contain;
`;

const Link = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid ${(p: IProps) => colours[p.border]};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  font-size: 2em;
  color: ${(p: IProps) => colours[p.secondary]};
  cursor: pointer;

  span {
    margin-left: 20px;
    font-weight: 200;
    color: ${(p: IProps) => colours[p.primary]};
  }

  &:hover {
    background: ${(p: IProps) => colours[p.hover]};
    border-color: ${(p: IProps) => colours[p.hover]};
    color: #fff;

    span {color: #fff;}

    ${CalendarIcon} {
      background: #fff;
    }
  }

  @media(max-width: 750px) {
    flex-direction: column;
    font-size: 1.4em;
    & > span { margin: 0; }

    ${CalendarIcon} {
      display: none;
    }
  }
`;

interface IProps {
  border: Colour;
  primary: Colour;
  secondary: Colour;
  hover: Colour;
}

interface CalendarProps {
  primary: Colour;
}

const CalendarLink: FC<IProps> = ({ border, primary, secondary, hover }: IProps) => {
  const history = useHistory();

  return (
    <Link border={border} primary={primary} secondary={secondary} hover={hover} onClick={() => history.push(`${process.env.PUBLIC_URL}/ourCalendar`)}>
      What's on?<span> Click to view Our Calendar</span><CalendarIcon primary={primary} />
    </Link>
  );
};

export default CalendarLink;