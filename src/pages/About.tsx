import React, { FC } from 'react';
import Hero from '../Shared/Hero';
import { PageBodyContainer } from '../Shared/SharedStyles';
import Footer from '../Shared/Footer';
import { Section } from './Home';

const About: FC = () => {
    return (
      <PageBodyContainer>
        <Hero image="kayakingHero" />

        <Section id="">
        </Section>

        <Footer />
      </PageBodyContainer>
    );
}

export default About;