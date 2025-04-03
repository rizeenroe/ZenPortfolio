import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const navbarRef = useRef(null);
  const openButtonRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const updateNavbar = (e) => setIsMobile(e.matches);

    updateNavbar(mediaQuery); 
    
    mediaQuery.addEventListener('change', updateNavbar);

    return () => {
      mediaQuery.removeEventListener('change', updateNavbar);
    };
  }, []);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      if (isMobile) {
        navbarRef.current.setAttribute('inert', '');
      } else {
        navbarRef.current.removeAttribute('inert');
      }
    }
  }, [isMobile]);

  const openSidebar = () => {
    setTimeout(() => {
      if (navbarRef.current && openButtonRef.current) {
        navbarRef.current.classList.add('show');
        openButtonRef.current.setAttribute('aria-expanded', 'true');
        navbarRef.current.removeAttribute('inert');
      }
    }, 0);
  };

  const closeSidebar = () => {
    setTimeout(() => {
      if (navbarRef.current && openButtonRef.current) {
        navbarRef.current.classList.remove('show');
        openButtonRef.current.setAttribute('aria-expanded', 'false');
        navbarRef.current.setAttribute('inert', '');
      }
    }, 0); 
  };



  return (
    <header>
      <Router>
      <button 
        id='open-sidebar-button' ref={openButtonRef} onClick={openSidebar} aria-label='open sidebar' aria-expanded={isMobile ? 'true' : 'false'} aria-controls='navbar'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </button>
      <nav ref={navbarRef}>
        <ul>
          <li>
            <button id='close-sidebar-button'onClick={closeSidebar} aria-label='close sidebar'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
          </li>
          <li className='home-li'>
            <a href='#home' className='active-link' aria-current="page">
              <span>Rizeen Roe</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contacts" className='accent-link'>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <div id='overlay' onClick={closeSidebar} aria-hidden="true"></div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='#about' element={<Home />}/>
        <Route path='#skills' element={<Home />}/>
        <Route path='#projects' element={<Home />}/>
        <Route path='#contacts' element={<Home />}/>
      </Routes>
    </Router>
    </header>
  );
}

export default App;
