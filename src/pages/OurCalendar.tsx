import React, { FC, useState } from 'react';
import { colours, Colour, SharedSettings } from '../Shared/SharedStyles';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import styled from 'styled-components';
import { CalendarEvents } from './OurCalendarEvents';
import ModalOverlay from '../Components/ModalOverlay';
import moment from 'moment';

const PageContainer = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;

  @media(max-width: ${SharedSettings.mobile}) {
    top: 50px;
  }
`;

const CalendarContainer = styled.div`
  width: 92%;
  height: calc(100vh - 200px);
  margin: auto;
  margin-top: 60px;

  @media(max-width: ${SharedSettings.mobile}) { 
    width: 98%;
    height: calc(100vh - 120px);
    
    .fc-today-button { display: none; } 
  }

  .fc-button, .fc-button:active, .fc-button:focus {
    background: ${colours.Purple};
    border-color: ${colours.Purple};
  }
  

  .fc-toolbar-title {
    font-weight: 100;
    color: ${colours.Purple};
  }

  .fc-daygrid-day-number {
    font-weight: 100;
  }

  .fc-day-today {
    background-color: ${colours.Purple}12 !important;

    .fc-daygrid-day-number {
      border: 2px solid ${colours.Purple};
      color: #7414dc;
      border-radius: 50%;
      height: 22px;
      width: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;
      margin-right: 4px;
      font-weight: 700;
    }
  }
  
  .fc-event-title {
    font-weight: 400;
    color: ${colours.dark};
  }


  .fc-day-sat:not(.fc-col-header-cell), .fc-day-sun:not(.fc-col-header-cell) {
    background: #f5f5f5;
  }

  .fc-daygrid-event {
    border-radius: 0;
    border: 0;
    border-left: 4px solid transparent;
    padding: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .all {
    background: ${colours.Teal}30;
    border-color: ${colours.Teal};
  }
  .beavers {
    background: ${colours.Blue}30;
    border-color: ${colours.Blue};
  }
  .cubs {
    background: ${colours.Green}30;
    border-color: ${colours.Green};
  }
  .scouts {
    background: ${colours.Purple}30;
    border-color: ${colours.Purple};
  }
  .explorers {
    background: ${colours.Red}30;
    border-color: ${colours.Red};
  }
`;



const OurCalendar: FC = () => {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [accent, setAccent] = useState<Colour>("grey60");
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("2001-01-01");
    const [endDate, setEndDate] = useState("2001-01-01");
    const [time, setTime] = useState("00:00");
    const [location, setLocation] = useState("");

    const eventHandler = (e: any) => {
      const className = e.event.classNames[0];

      switch (className) {
        case "all":
          setAccent("Teal");
          break;
        case "beavers":
          setAccent("Blue");
          break;
        case "cubs":
          setAccent("Green");
          break;
        case "scouts":
          setAccent("Purple");
          break;
        case "explorers":
          setAccent("Red");
          break;
        default:
          setAccent("Pink");
          break;
      }

      setTitle(e.event.title)
      setDescription(e.event.extendedProps.description)
      setStartDate(moment(e.event.start).format("DD/MM/yyyy"));
      setEndDate(moment(e.event.end).add(-1,'days').format("DD/MM/yyyy"));
      setTime(e.event.extendedProps.time);
      setLocation(e.event.extendedProps.location);
      setOverlayOpen(true);
    };

    const handleClose = () => {
      setOverlayOpen(false);
    };

    return (
      <>
        <PageContainer>     
          <CalendarContainer>
            <FullCalendar 
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events={CalendarEvents}
              height={"100%"}
              firstDay={1}
              eventClick={e => eventHandler(e)}
            />          
          </CalendarContainer>
        </PageContainer>
        <ModalOverlay open={overlayOpen} close={handleClose} title={title} description={description} accent={accent} startDate={startDate} endDate={endDate} time={time} location={location} />
      </>
    );
}

export default OurCalendar;