import React from 'react';
import development from '../assets/img/svc-ico/developing.png';
import coding from '../assets/img/svc-ico/coding.png';
import svc from '../assets/img/svc-ico/svc.png';
import devops from '../assets/img/svc-ico/devops.png';
import monitoring from '../assets/img/svc-ico/monitoring.png';
import design from '../assets/img/svc-ico/content.png';


function ServiceMe() {
  

  return (

    <section className='services'>
      <div className='services__wrapper '>
        <p className='title' id='services'>My Services</p>
        <p className='subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,rem, ipsum dolor sit amet consectetur adipisicing elit. Delectus earum</p>
        <ul className='services__content' id='#services'>
          <li className='services__item'>
            <img src={development} alt="" className='services__img' />
            <p className='services__block_title'>Development</p>
            <p className='services__block_text'>Lorem ipsum dolor sit amet.</p>
          </li>
          <li className='services__item'>
            <img src={coding} alt="" className='services__img' />
            <p className='services__block_title'>Coding</p>
            <p className='services__block_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className='services__item'>
            <img src={svc} alt="svc" className='services__img' />
            <p className='services__block_title'>Back services</p>
            <p className='services__block_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis</p>
          </li>
          <li className='services__item'>
            <img src={monitoring} alt="" className='services__img' />
            <p className='services__block_title'>Monitoring</p>
            <p className='services__block_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li className='services__item'>
            <img src={devops} alt="" className='services__img' />
            <p className='services__block_title'>DevOps</p>
            <p className='services__block_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus dignissimos.</p>
          </li>
          <li className='services__item'>
            <img src={design} alt="" className='services__img' />
            <p className='services__block_title'>WEB Design</p>
            <p className='services__block_text'>Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </div>

    </section>

  );
}

export default ServiceMe;
