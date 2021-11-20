import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import sectionLogo from '../img/explorers.png';
import { PageBodyContainer, colours } from '../Shared/SharedStyles';
import { Section } from './Home';
import { PageLogoGap, PageHeading, Grid, GridItem, Icon, Title, Description, BadgeLayout, DocumentContainer, SectionLogo } from './Beavers';
import { faCampground, faChild, faGlobeEurope, faHiking, faMountain, faUsers } from "@fortawesome/free-solid-svg-icons";
import WhosWho from '../Components/WhosWho';
import badges from '../img/Badge_Placement_Explorers.jpeg';
import Document from '../Components/Document';
import Footer from '../Shared/Footer';
import CalendarLink from '../Components/CalendarLink';
import Contact from '../Components/Contact';
import NeedParents from '../Components/NeedParents';

interface ILogoProps {
  top: number
}

const ExplorersIcon = styled(Icon)`
  color: ${colours.Red};
`;
const ExplorersTitle = styled(Title)`
  color: #003A82;
`;

const ExplorersLogo = styled(SectionLogo)`
  margin-top: -114px;

  @media(max-width: 700px) {
    margin-top: -75px;
  }
`;

const Explorers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="expeditionHero" />
        <ExplorersLogo image={sectionLogo} />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>Explorers are encouraged to lead themselves in deciding the programme and direction of the Unit, with support and guidance from leaders. The section also includes the Young Leaders’ Scheme, where young people are able to take on a leadership role in one of the younger sections. There is wider scope for activities like offshore sailing, campaigning, performing, parascending, mountaineering and expeditions.</PageHeading>
            <Grid>
              <GridItem>
                <ExplorersIcon icon={faHiking} size="2x" />
                <ExplorersTitle>Self Led</ExplorersTitle>
                <Description>We encourage Explorers to be independent, help create their programme, take a lead and to show these skills to our younger sections by becoming a young leader.</Description>
              </GridItem>
              
              <GridItem>
                <ExplorersIcon icon={faChild} size="2x" />
                <ExplorersTitle>Ages 14 - 18</ExplorersTitle>
                <Description>We welcome all young people to come and join the scouting adventure</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faCampground} size="2x" />
                <ExplorersTitle>Camping</ExplorersTitle>
                <Description>Explorer Scouts learn various skills, such as map reading, camp cooking and first aid in preparation for camp.</Description>
              </GridItem>
              
              <GridItem>
                <ExplorersIcon icon={faGlobeEurope} size="2x" />
                <ExplorersTitle>International Experiences</ExplorersTitle>
                <Description>At 2nd 60th we like to provide all our scouts an opportunity to meet with scouts from around the world</Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faMountain} size="2x" />
                <ExplorersTitle>Mountaineering</ExplorersTitle>
                <Description>One of the highlights of an Explorer scouts adventure is often mountaineering, reaching the peak is tough; and a great acheivement! </Description>
              </GridItem>

              <GridItem>
                <ExplorersIcon icon={faUsers} size="2x" />
                <ExplorersTitle>Leadership Experience</ExplorersTitle>
                <Description>We offer opportunities for leadership and strongly encourage teamwork</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <DocumentContainer>
          <Document name="Parents Guide" description="A Parents Guide to Explorers" filename="ParentsGuidetoExplorers.pdf" accent="Red" />
        </DocumentContainer>

        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho explorers/>
          </div>
        </Section>

        <Section id="calendar">
          <div className="wrapper">
            <CalendarLink border="Red" primary="Red" secondary="Navy" hover="Navy" />
          </div>
        </Section>

        <NeedParents accent="Navy" />

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

export default Explorers;