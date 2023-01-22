import React, { MouseEventHandler } from 'react';
import vkontakte from '../assets/img/ico/vkontakte.png';
import instagram from '../assets/img/ico/instagram.png';
import telegram from '../assets/img/ico/telegram.png';
import gitlab from '../assets/img/ico/gitlab.png';
import github from '../assets/img/ico/github.png';
import react from '../assets/img/ico/react.png';


function Header() {
  const [MenuState, setMenuState] = React.useState(false)
  const HandleMenuToggle = () => { setMenuState(!MenuState) }

  return (
    <header className="header">

      {/* основная секция с фото и текстом */}
      <section className='banner' id='home'>
        <div className='banner__sidebar ibg' />
        <div className='banner__column'>
          <h5 className='banner__title'>My_Portfolio</h5>
          <div className='banner__content'>
            <h4><span>Hello</span>,I'm</h4>
            <h2>Sysoev Pavel</h2>
            <h4>I'm Front End Web Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod ipsa possimus laudantium itaque architecto aperiam sed laboriosam, dicta fuga necessitatibus dolores aliquam quas fugiat ratione quia, ipsam quaerat natus.
              Dignissimos assumenda libero optio minus harum ratione enim hic deleniti aliquid, provident exercitationem sed omnis voluptatum voluptate perferendis expedita laboriosam quasi? Officiis, adipisci nobis in eum reiciendis quos libero consequuntur.</p>
            <a href="#" className='banner__aboutme_btn'>About Me</a>
          </div>
          <ul className='banner__sci sci'>
            <li ><img className='sci__link' src={gitlab} alt="" /></li>
            <li ><img className='sci__link' src={github} alt="" /></li>
            <li ><img className='sci__link' src={instagram} alt="" /></li>
            <li ><img className='sci__link' src={telegram} alt="" /></li>
            <li ><img className='sci__link' src={vkontakte} alt="" /></li>
          </ul>
        </div>
      </section>

      {/* кнопка открытия бокового меню  */}
      <button className={`toggle ${MenuState ? 'active' : ''}`} onClick={HandleMenuToggle} />

      {/* скрытое меню */}
      <nav className={`nav ${MenuState ? 'active' : ''}`}>
        <div className='empty'></div>
        <ul className='nav__menu'>
          <li className='nav__link'><a href="#home" onClick={HandleMenuToggle}>Home</a></li>
          <li className='nav__link'><a href="#about" onClick={HandleMenuToggle}>About</a></li>
          <li className='nav__link'><a href="#services" onClick={HandleMenuToggle}>Services</a></li>
          <li className='nav__link'><a href="#study" onClick={HandleMenuToggle} >Study</a></li>
          <li className='nav__link'><a href="#contact" onClick={HandleMenuToggle}>Contact</a></li>
          <img className='nav__link_react' src={react} alt="" />
        </ul>
      </nav>

    </header>
  );
}

export default Header;
