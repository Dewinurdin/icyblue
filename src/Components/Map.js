import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap';

import styled from 'styled-components'

const Styles = styled.div`
  .google-map {
    .embed-responsive  {
      height: 300px;
      width: 100%;
      margin-top: .3rem;
      margin-bottom: 4.5rem;
    }

// ----------------------------------------- //
// -------- MEDIA SCREEN ------------------- //
// ----------------------------------------- //

    @media (max-width: 700px) {
        .embed-responsive  {
          height: 200px;
          width: 100%;
          margin-top: .3rem;
          margin-bottom: 4.5rem; 
      }   
    }
}
`

const Map = () => (
  <Styles>
    <div className="google-map" id="map">
      <ResponsiveEmbed aspect="a4by3">
        <embed allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.1158656529483!2d-97.09019484905681!3d32.576433901399454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e8a7752f865df%3A0x5383d596deb96934!2s3141+E+Broad+St+%23205%2C+Mansfield%2C+TX+76063!5e0!3m2!1sen!2sus!4v1560209369088!5m2!1sen!2sus"  />
      </ResponsiveEmbed>
    </div>
    </Styles>
)

export default Map;

// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.1158656529483!2d-97.09019484905681!3d32.576433901399454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e8a7752f865df%3A0x5383d596deb96934!2s3141+E+Broad+St+%23205%2C+Mansfield%2C+TX+76063!5e0!3m2!1sen!2sus!4v1560209369088!5m2!1sen!2sus" 