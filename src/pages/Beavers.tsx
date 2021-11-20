import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { PageBodyContainer, colours, SharedSettings } from '../Shared/SharedStyles';
import { Section } from './Home';
import sectionLogo from '../img/beavers.png';
import badges from '../img/Badge_Placement_Beavers.jpeg';
import WhosWho from '../Components/WhosWho';
import { ImagesDesktop } from '../Shared/ImageLib';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faCampground, faChild, faPaintBrush, faFutbol, faCompass } from "@fortawesome/free-solid-svg-icons";
import Document from '../Components/Document';
import Footer from '../Shared/Footer';
import CalendarLink from '../Components/CalendarLink';
import Contact from '../Components/Contact';
import NeedParents from '../Components/NeedParents';

interface ILogoProps {
  top: number
}

export const PageHeading = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  margin: 0 auto 40px;
  color: ${colours.dark};
  text-align: center;
`;

export interface SectionProps {
  image: string;
}

export const SectionLogo = styled.div`
  width: 60%;
  height: 225px;
  background: url(${(p: SectionProps) => p.image});
  background-size: contain;
  background-position: center;
  margin: -108px auto 0;
  background-repeat: no-repeat;

  @media(max-width: 700px) {
    width: 75%;
    height: 150px;
    margin-top: -75px;
  }
`;

export const BadgeLayout = styled.img`
  margin: auto;
  width: 100%;
  max-width: 800px;
`;

export const PageLogoGap = styled.div`
  height: 90px;
`;

const MottoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BeaversCharacters = styled.div`
  width: 500px;
  height: 205px;
  background: url(${ImagesDesktop['characters']});
  background-size: contain;
  background-repeat: no-repeat;

  @media(max-width: 500px) {
    width: 290px;
    height: 119px;
  }
`;

const Motto = styled.div`
  font-size: 4em;
  font-weight: 800;
  font-style: italic;
  color: ${colours.Blue};
  margin-bottom: 20px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2em;
  }
`;





export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${colours.dark};

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 50px;
  grid-template-areas: 
    'icon title'
    'icon description';
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 50px 1fr;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 50px;
  border-radius: 50%;
  margin: 7px 15px 0px;
  color: ${colours.Blue};
  position: absolute;
  right: 0;

  @media(max-width: ${SharedSettings.mobile}) {
    margin: 7px 8px 0;
  }
`;

export const Title = styled.h2`
  grid-area: title;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 0;
  color: ${colours.Blue};
`;

export const Description = styled.p`
  grid-area: description;
  width: 98%;
  margin-top: 5px;
  line-height: 24px;
`;

export const DocumentContainer = styled.div`
  width: 400px;
  margin: -60px auto 50px;

  @media(max-width: ${SharedSettings.mobile}) {
    width: auto;
    margin-top: -30px;
  }
`;

const Beavers: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="beaversHero" />
        <SectionLogo image={sectionLogo} />
        
        <Section id="about">
          <div className="wrapper">
            <PageHeading>Beaver Scouts are our youngest members. They usually meet weekly to take part in a wide range of activities including games, crafts, singing, visits and good turns, along with plenty of outdoor activities. They will also have the opportunity to take part in the fun and excitement of camps and sleepovers. It may be the first time they spend a night away from home so it’s a real adventure for them.</PageHeading>
            <Grid>
              <GridItem>
                <Icon icon={faSmile} size="2x" />
                <Title>Friendly Group</Title>
                <Description>We are a friendly group based in the heart of Leicester, looking forward to offering you lots of adventure</Description>
              </GridItem>
              
              <GridItem>
                <Icon icon={faChild} size="2x" />
                <Title>6 - 8 Year olds</Title>
                <Description>We welcome boys and girls from ages 6 to 8, to come along and join the fun</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faPaintBrush} size="2x" />
                <Title>Arts and Crafts</Title>
                <Description>We offer all our young people the chance to be creative</Description>
              </GridItem>
              
              <GridItem>
                <Icon icon={faFutbol} size="2x" />
                <Title>Games</Title>
                <Description>We like to play lots of indoor and outdoor games, from board games in the hut - to team games in the park</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faCampground} size="2x" />
                <Title>Camps and Sleepovers</Title>
                <Description>This may be the first time your child has a night away from home, rest assured our friendly leadership team will make it a night to remember</Description>
              </GridItem>

              <GridItem>
                <Icon icon={faCompass} size="2x" />
                <Title>Life Skills</Title>
                <Description>At 2nd 60th we offer valuable life skills to all our young people, from cooking to first aid - and lots more</Description>
              </GridItem>
            </Grid>
          </div>
        </Section>

        <DocumentContainer>
          <Document name="Parents Guide" description="A Parents Guide to Beavers" filename="ParentsGuidetoBeavers.pdf" accent="Blue" />
        </DocumentContainer>
        
        <Section id="whosWho">
          <div className="wrapper">
            <WhosWho beavers/>
          </div>
        </Section>

        <Section id="calendar">
          <div className="wrapper">
            <CalendarLink border="Teal" primary="Teal" secondary="Blue" hover="Teal" />
          </div>
        </Section>

        <NeedParents accent="Blue" />

        <Section id="uniform">
          <div className="wrapper">
            <BadgeLayout src={badges} />
          </div>
        </Section>
      
        <Section id="characters" fullwidth lastItem>
          <MottoContainer>
            <Motto>"Fun and Friends"</Motto>
            <BeaversCharacters />
          </MottoContainer>
        </Section>

        <Contact />

        <Footer />
      </PageBodyContainer>
    );
}

export default Beavers;