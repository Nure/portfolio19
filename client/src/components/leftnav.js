import React from 'react';

import '../css/leftnav.css';

const LeftNav = () => (
  <div className="social-links-left">
    <ul className="social-list-l">
      <li>
        <a
          href="https://github.com/Nure"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://bd.linkedin.com/in/md-nure-alam-siddiq-a3922047"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/nuresiddiq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCrcVFPOmAreLtT0aEPxTbtg/playlists"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://stackoverflow.com/users/10871278/nurealam-siddiq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-stack-overflow" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
);

export default LeftNav;
