import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import GameLogoComponent from '../../components/GameLogoComponent/GameLogoComponent';
import Title from '../../components/Title/Title';
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Footer from '../../components/FooterComponent/FooterComponent';

export const PickGamePage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
        <div className="homelogo">
          <GameLogoComponent />
        </div>
        <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
          <ForkImageComponent />
        <div className="pickGameButton SmørrebrødButton">
          <Link to="/pick-level-page">
            <SubmitButton buttonTitle="Smørrebrød" />
          </Link>
        </div>
        <div className="pickGameButton WienerbrødButton">
          <Link to="/pick-level-page">
            <SubmitButton buttonTitle="Wienerbrød" />
          </Link>
        </div>
          <SpoonImageComponent />
    </div>

    {/* <div className="footer"> */}
      <Footer />
    {/* </div> */}
  </section>
);
