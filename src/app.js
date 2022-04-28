'use strict';
import React from 'react';
import './app.css';
import Footer from './Footer';
import { useLastFM } from 'use-last-fm';
import RepoCard from 'react-repo-card';
import { BrowserView, MobileView } from 'react-device-detect';
import useSound from 'use-sound';
import boopSfx from './assets/boop.mp3';
import Tilt from 'react-tilt';

const App = props => {
  const lastFM = useLastFM('Monochromish', '268c0ed4ae784e4e0bcb3cb1c49f61a6');
  const [play] = useSound(boopSfx);
  let data;
  if (lastFM.status !== 'playing' || lastFM.status == 'error') {
    data = {
      name: '',
      artist: '',
      album: '',
      art: '',
      link: ''
    };
  } else {
    data = {
      name: `Currently listening to ${lastFM.song.name}`,
      artist: `by ${lastFM.song.artist}`,
      album: `on ${lastFM.song.album}`,
      art: lastFM.song.art,
      link: lastFM.song.url
    };
  }

  return (
    <>
      <div class="hero min-h-[25rem]">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Monochromish</h1>
            <p class="py-6" id="glow">
              STD Testing Centre, Student and a Part-time Developer{' '}
              <b>
                {data.name} {data.artist} {data.album}
              </b>
            </p>
            <BrowserView>
              <albumart>
                <a href={data.link} target="_blank" onClick={play}>
                  <img src={data.art} alt={data.album} class="ribbon" />
                </a>
              </albumart>
            </BrowserView>
            <a href="http://github.com/Monochromish" target="_blank" onClick={play}>
              <button class="btn btn-success">Github</button>{' '}
            </a>
            <a href="https://discord.com/users/500315184510795819" target="_blank" onClick={play}>
              <button class="btn btn-success">Discord</button>{' '}
            </a>
            <a href="mailto:monolul@outlook.com" target="_blank" onClick={play}>
              <button class="btn btn-success">Mail</button>{' '}
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">My projects</h1>
            <p class="py-6">
              Here are some of my projects that I have worked on
              <br />
              including Kalopsia-Bot;
              <br />
              One of the best Discord Moderation and Multi-utility Discord bot written in Discord.js v12
            </p>
            <div align="center">
              <Tilt className="Tilt" options={{ max: 25, reverse: true }}>
                <div style={{ width: '400px' }}>
                  <RepoCard username="Monochromish" repository="Kalopsia-Bot" dark />
                </div>
              </Tilt>
              <br></br>
              <Tilt className="Tilt" options={{ max: 25, reverse: true }}>
                <div style={{ width: '400px' }}>
                  <RepoCard username="dracula" repository="cider" dark />
                </div>
              </Tilt>
              <br></br>
              <Tilt className="Tilt" options={{ max: 25, reverse: true }}>
                <div style={{ width: '400px' }}>
                  <RepoCard username="Monochromish" repository="Last.fm-Discord-Rich-Presence" dark />
                </div>
              </Tilt>
              <br></br>
              <Tilt className="Tilt" options={{ max: 25, reverse: true }}>
                <div style={{ width: '400px' }}>
                  <RepoCard username="Monochromish" repository="discord-activities" dark />
                </div>
              </Tilt>
              <br></br>
              <a href="https://github.com/Monochromish?tab=repositories" target="_blank" onClick={play}>
                <button class="btn btn-success">View More</button>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;
