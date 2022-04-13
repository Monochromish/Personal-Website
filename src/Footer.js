import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <div class="icon">
          <a href="https://github.com/Monochromish/personal-website" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} size="2x" />
          </a>
        </div>
        <p>Copyright © 2022 - All right reserved by Monochromish</p>
        <p>Source code for this website can be found on my Github</p>
      </div>
    </footer>
  );
}
