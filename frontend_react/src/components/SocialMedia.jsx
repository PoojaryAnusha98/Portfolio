import React from "react";

import { BsLinkedin, BsInstagram, BsGithub  } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/anushajpoojary"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/PoojaryAnusha98"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
