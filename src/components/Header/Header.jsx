import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navActive, setNavActive] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollingUp(currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
  };

  const handleNavToggle = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`${isScrollingUp ? 'header visible' : 'header hidden'} ${navActive ? 'nav-active' : ''}`}>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className={`hamburger ${navActive ? 'active' : ''}`} onClick={handleNavToggle}>
        <div />
        <div />
        <div />
      </button>
    </header>
  );
}

export default Header;
