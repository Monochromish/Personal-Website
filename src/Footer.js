import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import useSound from 'use-sound';
import boopSfx from './assets/boop.mp3';

export default function Footer() {
  const [play] = useSound(boopSfx);
  return (
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <div class="icon">
          <a
            href="https://github.com/Monochromish/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            onClick={play}
          >
            <FontAwesomeIcon icon={faGithubAlt} size="2x" />
          </a>
        </div>
        <p>Copyright © 2022 - All right reserved by Monochromish</p>
        <p>Source code for this website can be found on my Github</p>
      </div>
    </footer>
  );
}
