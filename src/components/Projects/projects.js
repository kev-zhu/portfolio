const projects = {
  base: '/media/projects/',
  projects: [
    {
      title: 'ExpLore',
      folder: 'explore/',
      main: 'explore-main.mov',
      media: ['explore-login.png', 'explore-main.mov', 'explore-add.mov', 'explore-mobile-login.png', 'explore-mobile-main.png'],
      alt: 'ExpLore Media Files',
      github: 'https://github.com/kev-zhu/exPlore',
      info: 'ExpLore is a dynamic web app aimed at assisting explorers in discovering destination hotspots remotely. As the developer, I created an intuitive user-friendly map interface using MapBox GL, seamlessly integrating data sourced from Yelp Fusion\'s API and user-generated content. The application efficiently manages over 10,000 location data points across 500+ cities by optimizing performance through storage in a PostgreSQL relational database.',
      skills: ['Python', 'Django', 'PostgreSQL']
    },
    {
      title: 'Spendfolio',
      folder: 'expenses/',
      main: 'expenses-main.mov',
      media: ['expenses-main.mov', 'expenses-add.mov', 'expenses-expenses.png', 'expenses-income.png'],
      alt: 'Expenses Media File',
      github: 'https://github.com/kev-zhu/expenseswebsite',
      info: 'Spendfolio is a web app that helps financially interested users track expenses and visualize their data across charts and tables. I served as the full-stack developer for this project, utilizing Bootstrap to create a responsive web design. Chart.js was employed to organize data into visual charts and graphs, aiding users in understanding their financial trends.',
      skills: ['Python', 'Django', 'PostgreSQL', 'Bootstrap']
    },
    {
      title: 'Phonebook',
      folder: 'phonebook/',
      main: 'phonebook-main.png',
      media: ['phonebook-main.png', 'phonebook-add.png', 'phonebook-mobile.png', 'phonebook-mobile-add.png'],
      alt: 'Phonebook Media Files',
      github: 'https://github.com/kev-zhu/phonebook',
      info: 'For a Full Stack Open project, I developed a phonebook single-page application using the MERN stack. To ensure modern web development principles, I utilized React for frontend development, such as creating reusable styled components, and managed backend server-side operations. This application also communicates with MongoDB\'s cloud platform and effectively handles RESTful APIs for data management.',
      skills: ['MongoDB', 'Express', 'React', 'Node']
    },
    {
      title: 'Dictionary',
      folder: 'dictionary/',
      main: 'dictionary-main.png',
      media: ['dictionary-main.png', 'dictionary-dark.png', 'dictionary-mobile.png', 'dictionary-mobile-dark.png'],
      alt: 'Dictionary Media Files',
      github: 'https://github.com/kev-zhu/dictionary',
      info: 'I developed a dictionary web page as a Frontend Mentor project, implementing search functionality and interactive elements using HTML, CSS, and JavaScript to faithfully follow the design mockups provided. I ensured responsiveness across devices by testing with the Google Chrome Dev Tools’ device toolbar feature and verified proper application functionality with manual testing.',
      skills: ['HTML, CSS, Javascript']
    }
  ]
}

export default projects