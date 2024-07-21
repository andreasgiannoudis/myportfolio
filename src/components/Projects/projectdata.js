/**
 * This module exports an array of project objects.
 * Each project object contains the following properties:
 * - id: A unique identifier for the project
 * - title: The title of the project
 * - description: A brief description of the project
 * - image: The path to an image representing the project
 */
const projectData = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'The portfolio you are seeing right now. Built with React and SASS for styling. Designed and built by me!',
      image: './src/assets/img/project-images/portfolio.png',
      link: '/'
    },
    {
      id: 2,
      title: 'Wordpress Project',
      description: 'Wordpress project that is completely custom, own theme, used by php and wordpress editor and sass for styling. All content is dynamic. Unfortunately it is not live so you can see it',
      image: './src/assets/img/project-images/wordpress-project-lorum.png',
      link: '#'
    },
    {
      id: 3,
      title: 'Web Shop',
      description: 'Web shop using React and Node.js. You can add products to the cart and purchase them (no real payment).',
      image: './src/assets/img/project-images/webbshopp.png',
      link: 'https://github.com/andreasgiannoudis/webb23-js2-slutprojekt-andreas-giannoudis'
    },
    {
      id: 4,
      title: 'Wordpress product page',
      description: 'Product page created with wordpress/woocommerce. Use PHP, Sass and Vitejs. Everything is customized except the product, is created in woocommerce. Unfortunately they are not live.',
      image: './src/assets/img/project-images/productpage.png',
      link: '#'
    },
  ];
  
  export default projectData;
  