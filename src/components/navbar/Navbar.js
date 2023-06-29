import React, { useEffect, useRef } from "react";
import "./style.css";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


import { scroller } from 'react-scroll';

const Navbar = () => {
  const activeBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY + 400;
      const homeObject = document.querySelector("#header");
      const galleryObject = document.querySelector("#portfolio");
      const aboutObject = document.querySelector("#about");
      let translateX = '';
  
      if (homeObject && scroll > homeObject.offsetTop) {
        translateX = '80px';
        activeBtnRef.current.style.transform = translateX;
      }
  
      if (galleryObject && scroll > galleryObject.offsetTop) {
        translateX = '160px';
        activeBtnRef.current.style.transform = translateX;
      }
  
      if (aboutObject && scroll > aboutObject.offsetTop) {
        translateX = '241px';
        activeBtnRef.current.style.transform = translateX;
      }
  
      // Очистка таймера при каждом вызове handleScroll
      clearTimeout(handleScroll.timer);
      handleScroll.timer = setTimeout(() => {
        activeBtnRef.current.style.transform = `translateX(${translateX})`;
      }, 100);
    };
  
    // Установка обработчика события прокрутки
    window.addEventListener("scroll", handleScroll);
  
    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(handleScroll.timer);
    };
  }, []);
  
  

  
  const handleScrollToBlock = (text) => {
    scroller.scrollTo(text, {
      duration: 600, // Длительность анимации в миллисекундах
      smooth: 'easeInOutQuart', // Тип анимации
      offset: -150
    })
  }
  
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div ref={activeBtnRef} className="active-btn"></div>
        <ul className="navbar__list">
          <li className="navbar__list-main">
            <a href="#" onClick={() => handleScrollToBlock('header')} className="navbar__links btn">
              Home
            </a>
          </li>
          <li className="navbar__list-main">
          <a href="#" onClick={() => handleScrollToBlock('section')} className="navbar__links">
              Portfolio
          </a>
          </li>
          <li className="navbar__list-main">
            <a href="#" onClick={() => handleScrollToBlock('about')} className="navbar__links">
              About
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
