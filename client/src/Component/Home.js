import React, { Component } from 'react';
import Preloader from './Preloader';
import Musicbox from './Musicbox';
import StartHero from './StartHero';
import Header from './Header';
import Section from './Section';
import CountDown from './CountDown';
import StorySections from './StorySections';
import SectionCta from './SectionCta';
import SectionEvent from './SectionEvent';
import PeopleGuest from './PeopleGuest';
import Galery from './Galery';
import Rsvp from './Rsvp';
import ThanksTo from './ThanksTo';
import TextToThanks from './TextToThanks';
import Footer from './Footer';

export default class Home extends Component {

    render() {
        return (
            <div className="page-wrapper">
                <Preloader />
                <StartHero />
                <Header />
                <Section />
                <CountDown/>
                <StorySections/>
                <SectionCta/>
                <SectionEvent/>
                <PeopleGuest/>
                <Galery/>
                <Rsvp/>
                <ThanksTo/>
                <TextToThanks/>
                <Footer/>
                <Musicbox />
            </div>


        )
    }
}