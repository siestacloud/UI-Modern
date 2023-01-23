import React from 'react';
import Collage from './collage/collage';

function StudyMe() {
  return (
    <section className='study'>
      <div className='study__wrapper white' id='study'>
        <p className='title' id='services'>My stages for becoming a front-end developer</p>
        <p className='subtitle'>Lorem, ipsum dolor sit amet. Delectus,rem, ipsum dolor sit amet consectetur adipisicing elit. Delectus earum</p>
        <Collage />
      </div>
    </section>
  );
}
export default StudyMe;

