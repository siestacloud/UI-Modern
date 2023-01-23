import dive from '../assets/img/collage/dive.png';
import phone from '../assets/img/collage/phone.png';
import shop from '../assets/img/collage/shop.png';
import snake from '../assets/img/collage/snake.png';
import studio from '../assets/img/collage/studio.png';


import html from '../assets/img/ico/html.png';
import css from '../assets/img/ico/css-3.png';
import sass from '../assets/img/ico/sass.png';
import js from '../assets/img/ico/js.png';
import ts from '../assets/img/ico/ts.png';
import react from '../assets/img/ico/react.png';

export interface AppState {
  status: string
  error: string
  FrontStudyStages: frontStudy[]
}



export interface frontStudy {
  projectTitle: string
  date: string
  desc: string
  stack: string[]
  preview: string
  sourceUrl: string
}


export const DEF_APP_STATE: AppState = {
  status: '', error: '', FrontStudyStages: [
    {
      projectTitle: 'Phone Application',
      date: 'may 2022',
      desc: 'little layout for download page',
      stack: [html, css],
      preview: phone,
      sourceUrl: 'empty'
    }, 
    {
      projectTitle: 'Minimal Blog',
      date: ' may 2022',
      desc: 'layout for Skill Factory module task',
      stack: [html, css],
      preview: shop,
      sourceUrl: 'https://github.com/siestacloud/minimal-blog'
    }, 
    {
      projectTitle: 'Design Studio',
      date: 'june 2022',
      desc: 'layout for Skill Factory module task',
      stack: [html, css, sass, js],
      preview: studio,
      sourceUrl: 'https://github.com/siestacloud/DesignStudio-front'
    },
    {
      projectTitle: 'Snake Game',
      date: 'august',
      desc: 'level up my JS, all application logic is implemented according to OOP principles.',
      stack: [html, css, js],
      preview: snake,
      sourceUrl: 'https://github.com/siestacloud/SnakeJS'
    }, 
    {
      projectTitle: 'Custom one-page site template',
      date: 'september 2022',
      desc: 'implemented the application design using SASS/SCSS preprocessor  ',
      stack: [html, css, sass, js],
      preview: dive,
      sourceUrl: ''
    },
    
    
  ]
}
