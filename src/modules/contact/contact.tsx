import React from 'react'

import {
  workProps,
  WORK
} from '../../data/work';
import styles from "./contact.module.css";


const Contact = () => {
  return (
    <div>
      Contact

      {WORK && WORK.map(work => (
        <img src={work.icon} key={work.icon} />
      ))}

      <div>
        {/* <iframe 
          src="https://open.spotify.com/embed/playlist/2D86K0ACtMHtUKiEYer2FW?utm_source=generator"
          width="100%"
          height="500"
          frameBorder="0"
          className="mt-5"
          allowTransparency={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe> */}
      </div>
    </div>
  )
}

export default Contact;
