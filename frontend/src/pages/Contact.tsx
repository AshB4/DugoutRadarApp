import React from 'react';
import Card from '../componets/global/Card';
import DynamicBg from '../componets/global/DynamicBg';

const Contact = () => {
  return (
    <DynamicBg>
    <Card>
      <h2>Contact the DugoutRadar Team</h2>
      <p>
        Got feedback? Found a bug? Want to see your league featured? We’d love to hear from you.
      </p>

      <ul style={{ lineHeight: '1.8' }}>
        <li>
          📨 <strong>Email:</strong>{' '}
          <a href="mailto:dugoutradar@app.dev">dugoutradar@app.dev</a>
          //fake email for now
        </li>
        <li>
          🐙 <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/AshB4/DugoutRadar"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/AshB4/DugoutRadar
          </a>
        </li>
        <li>
          📍 <strong>Based in:</strong> Louisiana — where baseball runs deep and the bugs are the
          size of baseballs.
        </li>
      </ul>

      <p style={{ marginTop: '1rem' }}>
        If you're with a team, org, or sponsor and want to collaborate, reach out. DugoutRadar is
        built to grow with the community.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '2rem' }}>
        This isn’t some faceless form — it’s just me, Ashley, reading your message and probably
        answering while juggling coffee and code.
      </p>
    </Card>
    </DynamicBg>
  );
};

export default Contact;
export {};
