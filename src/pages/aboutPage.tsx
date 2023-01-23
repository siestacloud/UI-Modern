import React from 'react';
import AboutMe from '../components/aboutMe';
import ContactMe from '../components/contactMe';
import ServiceMe from '../components/serviceMe';
import StudyMe from '../components/studyMe';

function AboutPage() {
  return (
    <>
      <AboutMe />
      <ServiceMe />
      <StudyMe />
      <ContactMe/>
    </>
  );
}

export default AboutPage;
