import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import { Section } from './Home';
import { PageHeading, Grid, GridItem, Icon, Title, Description, BadgeLayout, DocumentContainer, SectionLogo } from './Beavers';
import { faCampground, faChild,faRoute, faUsers, faSnowboarding, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import WhosWho from '../Components/WhosWho';
import badges from '../img/Badge_Placement_Scouts.jpeg';
import Document from '../Components/Document';
import Footer from '../Shared/Footer';
import CalendarLink from '../Components/CalendarLink';
import Contact from '../Components/Contact';
import NeedParents from '../Components/NeedParents';
import sectionLogo from '../img/scouts.png';

interface ILogoProps {
  top: number
}

const ScoutsIcon = styled(Icon)`
  color: ${colours.Purple};
`;
const ScoutsTitle = styled(Title)`
  color: #004851;
`;

const ScoutsLogo = styled(SectionLogo)`
  margin-top: -114px;

  @media(max-width: 700px) {
    margin-top: -75px;
  }
`;


const Scouts: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="scoutsHero" />
        <ScoutsLogo image={sectionLogo} />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>Each Scout Troop consists of small units of six to eight Scouts called a Patrol, usually led by a Patrol Leader. Outdoor activities feature prominently, with the highlight being camping. Throughout the year, Scouts learn various skills, such as map reading, camp cooking and first aid in preparation for camp. Rock climbing, potholing, gliding, photography and international experiences are just some of the things they get up to.</PageHeading>
            <Grid>
              <GridItem>
                <ScoutsIcon icon={faUsers} size="2x" />
                <ScoutsTitle>Scout Patrols</ScoutsTitle>
                <Description>We offer opportunities for leadership and strongly encourage teamwork</Description>
              </GridItem>
              
              <GridItem>
                <ScoutsIcon icon={faChild} size="2x" />
                <ScoutsTitle>Ages 10 ½ - 14</ScoutsTitle>
                <Description>We welcome all young people to come and join the scouting adventure</Description>
              </GridItem>

              <GridItem>
                <ScoutsIcon icon={faCampground} size="2x" />
                <ScoutsTitle>Camping</ScoutsTitle>
                <Description>Scouts learn various skills, such as map reading, camp cooking and first aid in preparation for camp.</Description>
              </GridItem>
              
              <GridItem>
                <ScoutsIcon icon={faSnowboarding} size="2x" />
                <ScoutsTitle>Exciting Activities</ScoutsTitle>
                <Description>As young people move up the sections the more exciting the activities become! Scouts get the opportunity to have a go at things such as Scuba Diving, survival camps &amp; Paintballing to name a few!</Description>
              </GridItem>

              <GridItem>
                <ScoutsIcon icon={faGlobeEurope} size="2x" />
                <ScoutsTitle>International Experiences</ScoutsTitle>
                <Description>At 2nd 60th we like to provide all our scouts an opportunity to meet with scouts from around the world</Description>
              </GridItem>

              <GridItem>
                <ScoutsIcon icon={faRoute} size="2x" />
                <ScoutsTitle>Advanced Skills</ScoutsTitle>
                <Description>Skills for life is the moto we work toward sand this starts in Beavers by Scouts we aim to teach more advanced skills in navigation, first aid, mechanics, DIY and cooking.</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <DocumentContainer>
          <Document name="Parents Guide" description="A Parents Guide to Scouts" filename="ParentsGuidetoScouts.pdf" accent="Purple" />
        </DocumentContainer>

        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho scouts/>
          </div>
        </Section>
        
        <Section id="calendar">
          <div className="wrapper">
            <CalendarLink border="Teal" primary="Teal" secondary="Purple" hover="Teal" />
          </div>
        </Section>

        <NeedParents accent="Purple" />

        <Section id="uniform">
          <div className="wrapper">
            <BadgeLayout src={badges} />
          </div>
        </Section>

        <Contact />

        <Footer />
      </PageBodyContainer>
    );
}

export default Scouts;