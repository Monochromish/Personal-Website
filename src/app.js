'use strict';
import React from 'react';
import './app.css';
import { useLastFM } from 'use-last-fm';
import RepoCard from 'react-repo-card';

const App = props => {
  const lastFM = useLastFM('Monochromish', '268c0ed4ae784e4e0bcb3cb1c49f61a6');
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
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Monochromish - Home</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Monochromish" />
        <meta name="twitter:title" content="Monochromish - Home" />
        <meta name="twitter:description" content="My personal website, nothing much nothing less." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/79590499?v=4" />
        <meta property="og:title" content="Monochromish - Home" />
        <meta property="og:url" content="https://monolul.me" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/79590499?v=4" />
      </head>
      <div class="hero min-h-[25rem]">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Monochromish</h1>
            <p class="py-6">
              STD Testing Centre, Student and a Part-time Developer{' '}
              <b>
                {data.name} {data.artist} {data.album}
              </b>
            </p>
            <albumart>
              <a href={data.link} target="_blank">
                <img src={data.art} alt={data.album} class="ribbon" />
              </a>
            </albumart>
            <button class="btn btn-success">
              <a href="http://github.com/Monochromish">GitHub</a>
            </button>{' '}
            <button class="btn btn-success">
              <a href="https://discord.com/users/500315184510795819">Discord</a>
            </button>{' '}
            <button class="btn btn-success">
              <a href="mailto:monolul@outlook.com">Mail</a>
            </button>{' '}
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">My projects</h1>
            <p class="py-6">These are some of my open source projects that I am currently working on</p>
            <div align="center">
              <div style={{ width: '405px' }}>
                <RepoCard username="Monochromish" repository="Kalopsia-Bot" />
              </div>
              <br></br>
              <div style={{ width: '405px' }}>
                <RepoCard username="prizm-project" repository="Prizm-Website" />
              </div>
              <br></br>
              <div style={{ width: '405px' }}>
                <RepoCard username="Monochromish" repository="discord-activities" />
              </div>
              <br></br>
              <div style={{ width: '405px' }}>
                <RepoCard username="Monochromish" repository="Last.fm-Discord-Rich-Presence" />
              </div>
              <br></br>
              <button class="btn btn-success">
                <a href="https://github.com/Monochromish?tab=repositories">View More</a>
              </button>{' '}
            </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Monochromish</p>
        </div>
      </footer>
    </>
  );
};
export default App;
