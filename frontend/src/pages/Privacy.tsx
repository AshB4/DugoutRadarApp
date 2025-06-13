import React from 'react';
import Card from '../componets/global/Card';

const Privacy = () => {
  return (
    <Card>
      <h2>Privacy Policy</h2>
      <p>
        DugoutRadar doesn't collect, store, sell, barter, or bribe anyone for your personal data.
        This is a passion project, not a data farm.
      </p>

      <h3>What We Collect</h3>
      <ul style={{ lineHeight: '1.8' }}>
        <li>No names</li>
        <li>No emails</li>
        <li>No location tracking</li>
        <li>No cookies (unless you're baking them while visiting)</li>
      </ul>

      <h3>What Might Be Logged</h3>
      <p>
        If you're using this app locally or on a hosted version, your browser might log standard web
        stuff like API requests and console logs. But DugoutRadar itself isn’t peeking at your data.
      </p>

      <h3>Third-Party Services</h3>
      <p>
        This project may pull sports data from public APIs (like TheSportsDB). I don’t control how
        they operate — I just borrow the scoreboard.
      </p>

      <h3>Your Data Belongs to You</h3>
      <p>
        If this app ever adds user accounts or saving features, you'll know. Until then, this is
        read-only, stat-checking fun.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '2rem' }}>
        If you’re paranoid (same), feel free to read the source code on GitHub and verify it for
        yourself.
      </p>
    </Card>
  );
};

export default Privacy;
export {};
