/**
 * This module exports an array of project objects.
 * Each project object contains the following properties:
 * - id: A unique identifier for the project
 * - title: The title of the project
 * - description: A brief description of the project
 * - image: The path to an image representing the project
 */

import project1 from '/src/assets/img/project-images/portfolio.png';
import project2 from '/src/assets/img/project-images/wordpress-project-lorum.png';
import project3 from '/src/assets/img/project-images/webbshopp.png';
import project4 from '/src/assets/img/project-images/productpage.png';
import project5 from '/src/assets/img/project-images/movies-series.png';
const projectData = [
    {
      id: 1,
      title: 'Popular movies and series',
      description: 'Movies/series webapp created with Next.js and Scss. Designed and developed by me. Search movies and series. Discover the popular movies and series by navigation to each page.',
      image: project5,
      link: 'https://popular-movies-series-6q6bgbiw2-andreasgiannoudis-projects.vercel.app/'
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'The portfolio you are seeing right now. Built with React and SASS for styling. Designed and built by me!',
      image: project1,
      link: '/'
    },
    {
      id: 3,
      title: 'Wordpress Project',
      description: 'Wordpress project that is completely custom, own theme, used by php and wordpress editor and sass for styling. All content is dynamic. Unfortunately it is not live so you can see it',
      image: project2,
      link: '#'
    },
    {
      id: 4,
      title: 'Web Shop',
      description: 'Web shop using React and Node.js. You can add products to the cart and purchase them (no real payment).',
      image: project3,
      link: 'https://github.com/andreasgiannoudis/webb23-js2-slutprojekt-andreas-giannoudis'
    },
    {
      id: 5,
      title: 'Wordpress product page',
      description: 'Product page created with wordpress/woocommerce. Use PHP, Sass and Vitejs. Everything is customized except the product, is created in woocommerce. Unfortunately they are not live.',
      image: project4,
      link: '#'
    },
    
  ];
  
  export default projectData;
  