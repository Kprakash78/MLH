import './index.css';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { InteractiveHoverButton } from './components/ui/interactive-hover-button';
import { ActsLogoTransition } from './components/ActsLogoTransition';
import { AboutSection } from './components/AboutSection';
import TimelinePage from "./pages/TimelinePage";
import PrizePage from "./pages/PrizePage";
import SponsorsPage from "./pages/SponsorsPage";
import MentorsPage from "./pages/MentorsPage";
import FAQPage from "./pages/FAQPage";
import ReadyToBuildPage from "./pages/ReadyToBuildPage";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="hacktoberfest-site">
      {/* Sticky High-Contrast Navbar */}
      <nav className="navbar" id="navbar">
        <div className="navbar-header-row">
          <a href="#hero" className="logo hacktoberfest-logo" onClick={closeMenu}>
            <span className="logo-text">HACKTOBERFEST</span>
            <span className="logo-badge">26</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li><a href="#hero">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#timeline">TIMELINE</a></li>
          <li><a href="#prizes">PRIZES</a></li>
          <li><a href="#sponsors">SPONSORS</a></li>
          <li><a href="#mentors">MENTORS</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <a
              href="https://events.mlh.com/events/14935-hacktoberfest-hack-day-new-delhi-x-acts-edc"
              target="_blank"
              rel="noreferrer"
              className="nav-register-btn"
            >
              REGISTER
            </a>
          </li>
        </ul>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" role="dialog" aria-label="Mobile Navigation">
            <ul className="mobile-nav-links">
              <li><a href="#hero" onClick={closeMenu}>HOME</a></li>
              <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
              <li><a href="#timeline" onClick={closeMenu}>TIMELINE</a></li>
              <li><a href="#prizes" onClick={closeMenu}>PRIZES</a></li>
              <li><a href="#sponsors" onClick={closeMenu}>SPONSORS</a></li>
              <li><a href="#mentors" onClick={closeMenu}>MENTORS</a></li>
              <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            </ul>
            <div className="mobile-drawer-cta">
              <a
                href="https://events.mlh.com/events/14935-hacktoberfest-hack-day-new-delhi-x-acts-edc"
                target="_blank"
                rel="noreferrer"
                className="mobile-drawer-register-btn"
                onClick={closeMenu}
              >
                REGISTER NOW ↗
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Container */}
      <main className="main-content w-full overflow-hidden">
        {/* HERO SECTION */}
        <div className="figma-vector-wrapper" id="hero">
          <div className="artwork-container">
            <object
              data="/hacktoberfest_full.svg"
              type="image/svg+xml"
              className="figma-master-canvas"
              aria-label="Hacktoberfest 2026 Official Figma Landing Page"
            >
              <img 
                src="/hacktoberfest_full.svg" 
                alt="Hacktoberfest 2026 Design" 
                className="figma-master-canvas"
              />
            </object>

            {/* Clickable interactive overlay precisely aligned with the REGISTER NOW button in the Figma artwork */}
            <div className="hero-register-btn-wrapper">
              <InteractiveHoverButton
                href="https://events.mlh.com/events/14935-hacktoberfest-hack-day-new-delhi-x-acts-edc"
                target="_blank"
                rel="noreferrer"
                className="hero-register-btn"
                title="Register for Hacktoberfest 26"
              >
                REGISTER NOW
              </InteractiveHoverButton>
            </div>

            {/* Smooth ACTS Logo Theme Transition in Hero top-right */}
            <div className="hero-acts-logo-wrapper">
              <ActsLogoTransition />
            </div>
          </div>
        </div>

        {/* Enhanced Animated About Hacktoberfest Section */}
        <AboutSection />

        {/* Teammate Sections */}
        <div id="timeline">
          <TimelinePage />
        </div>
        <div id="prizes">
          <PrizePage />
        </div>
        <div id="sponsors">
          <SponsorsPage />
        </div>
        <div id="mentors">
          <MentorsPage />
        </div>
        <div id="faq">
          <FAQPage />
        </div>
        <ReadyToBuildPage />
      </main>
    </div>
  );
}

