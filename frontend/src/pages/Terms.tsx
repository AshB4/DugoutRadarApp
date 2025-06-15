import React from 'react';
import Card from '../componets/global/Card';
import DynamicBg from '../componets/global/DynamicBg';

const Terms = () => {
  return (
    <DynamicBg>
    <Card>
      <h2>Terms of Service</h2>

      <p>
        Welcome to DugoutRadar. By accessing or using this application, you agree to the following
        terms. Please read them carefully to ensure a clear understanding of your rights and
        responsibilities.
      </p>

      <h3>1. Accuracy of Information</h3>
      <p>
        While we strive to provide accurate and timely baseball data, DugoutRadar makes no
        guarantees regarding the completeness or reliability of third-party information.
        Users should verify critical details independently.
      </p>

      <h3>2. Use of the Platform</h3>
      <p>
        DugoutRadar is intended for individual use by coaches, players, parents, and fans. You
        agree not to misuse the platform, attempt unauthorized access, or engage in any activity
        that disrupts service or violates applicable laws.
      </p>

      <h3>3. User Responsibility</h3>
      <p>
        You are responsible for how you use the data and tools provided. DugoutRadar is not
        liable for scheduling conflicts, miscommunication, or any decision made using the
        platform's features.
      </p>

      <h3>4. Data and Privacy</h3>
      <p>
        DugoutRadar does not sell or share personal data. Any team or user information entered
        is used solely for the purposes of improving your experience with the app.
      </p>

      <h3>5. Changes and Updates</h3>
      <p>
        We may update these terms periodically. Continued use of the platform after changes are
        posted constitutes your agreement to the revised terms.
      </p>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Thank you for supporting grassroots baseball and responsible data use.
      </p>
    </Card>
    </DynamicBg>
  );
};

export default Terms;
export {};
