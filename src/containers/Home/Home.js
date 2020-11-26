import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Layout from '../../components/Layout';

export const Home = () => (
  <Layout>
    <div className="headercontainer">
      <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
    </div>

    <ForkImageComponent />
    <div className="homebutton">
      <Link to="/pick-game-page">
        <SubmitButton buttonTitle="Play EAT THE PAIR" />
      </Link>
    </div>

    <SpoonImageComponent />
  </Layout>

);
