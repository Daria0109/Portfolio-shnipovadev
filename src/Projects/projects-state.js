import todolistImg from './../assets/todolist-project.png';
import counterImg from './../assets/counter-project.png';
import quoteImg from './../assets/quote-project.png';
import passwordImg from './../assets/password-project.png';
import estateImg from './../assets/estate-project.png';
import cardsImg from './../assets/cards-project.png'

export const projects = [
  {
    title: 'Smart cards',
    description: 'STACK: React, Redux, TypeScript, SCSS, REST API, Redux-thunk, Axios, React-router-dom',
    projectImg: cardsImg,
    demoLink: 'https://daria0109.github.io/Cards_ReactTS',
    sourceCodeLink: 'https://github.com/Daria0109/Cards_ReactTS'
  },
  {
    title: 'Counter',
    description: 'STACK: React, TypeScript, Redux, CSS3',
    projectImg: counterImg,
    demoLink: 'https://daria0109.github.io/Counter_ReactTS',
    sourceCodeLink: 'https://github.com/Daria0109/Counter_ReactTS'
  },
  {
    title: 'Quote of the day',
    description: 'STACK: JavaScript, CSS3, HTML5, Animate.css, Google Fonts, Font Awesome Icons',
    projectImg: quoteImg,
    demoLink: 'https://daria0109.github.io/QuotesGenerator_JS',
    sourceCodeLink: 'https://github.com/Daria0109/QuotesGenerator_JS'
  },
  {
    title: 'Todolist',
    description: 'STACK: React, TypeScript, Redux, Redux Toolkit, Material UI, Formik,' +
      'REST API, Redux-thunk, Axios, React-router-dom',
    projectImg: todolistImg,
    demoLink: 'https://daria0109.github.io/Todolist_ReactTS',
    sourceCodeLink: 'https://github.com/Daria0109/Todolist_ReactTS'
  },
  // {
  //   title: 'Calculator',
  //   description: 'STACK: JavaScript, CSS3, HTML5',
  //   projectImg: calcImg,
  //   demoLink: 'https://daria0109.github.io/Calculator_JS',
  //   sourceCodeLink: 'https://github.com/Daria0109/Calculator_JS'
  // },
  {
    title: 'Password generator',
    description: 'STACK: JavaScript, CSS3, HTML5',
    projectImg: passwordImg,
    demoLink: 'https://daria0109.github.io/PasswordGenerator_JS',
    sourceCodeLink: 'https://github.com/Daria0109/PasswordGenerator_JS'
  },
  {
    title: 'Landing for estate agency',
    description: 'STACK: HTML5, SCSS, BEM',
    projectImg: estateImg,
    demoLink: 'https://daria0109.github.io/to2rent_html-css',
    sourceCodeLink: 'https://github.com/Daria0109/to2rent_html-css'
  },
]