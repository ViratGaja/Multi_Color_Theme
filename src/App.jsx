import React, { useState, useEffect } from 'react';
import { ChevronDown, Sun, Moon, Palette, Home, User, Settings, Mail, Menu, X } from 'lucide-react';

const MultiThemeSwitcher = () => {
  // Theme state with localStorage persistence simulation
  const [currentTheme, setCurrentTheme] = useState(() => {
    return 'theme1';
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme configurations
  const themes = {
    theme1: {
      name: 'Classic Light',
      icon: <Sun className="icon-small" />,
      layout: 'simple',
      className: 'theme-classic'
    },
    theme2: {
      name: 'Dark Mode',
      icon: <Moon className="icon-small" />,
      layout: 'sidebar',
      className: 'theme-dark'
    },
    theme3: {
      name: 'Colorful Pacific',
      icon: <Palette className="icon-small" />,
      layout: 'card-based',
      className: 'theme-colorful'
    }
  };

  const theme = themes[currentTheme];

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    setDropdownOpen(false);
  };

  // Sample navigation items
  const navItems = [
    { icon: <Home className="icon-medium" />, label: 'Home', active: true },
    { icon: <User className="icon-medium" />, label: 'About', active: false },
    { icon: <Settings className="icon-medium" />, label: 'Contact', active: false },
    { icon: <Mail className="icon-medium" />, label: 'Services', active: false }
  ];

  // Render different layouts based on theme
  const renderLayout = () => {
    if (theme.layout === 'sidebar') {
      return (
        <div className="layout-sidebar">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-title">ThemeApp</div>
            <nav className="sidebar-nav">
              {navItems.map((item, index) => (
                <div key={index} className={`nav-item ${item.active ? 'nav-item-active' : ''}`}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="main-content">
            <div className="content-wrapper">
              <MainContent />
            </div>
          </div>
        </div>
      );
    } else if (theme.layout === 'card-based') {
      return (
        <div className="layout-cards">
          <div className="cards-container">
            <div className="nav-cards-grid">
              {navItems.map((item, index) => (
                <div key={index} className="nav-card">
                  <div className="nav-card-icon">
                    {item.icon}
                  </div>
                  <h3 className="nav-card-title">{item.label}</h3>
                  <p className="nav-card-description">
                    Explore {item.label.toLowerCase()} section with beautiful card-based design.
                  </p>
                </div>
              ))}
            </div>
            <div className="main-card">
              <MainContent />
            </div>
          </div>
        </div>
      );
    } else {
      // Simple layout
      return (
        <div className="layout-simple">
          <nav className="top-nav">
            <div className="nav-container">
              <div className="nav-title">ThemeApp</div>
              
              {/* Desktop Navigation */}
              <div className="nav-items desktop-nav">
                {navItems.map((item, index) => (
                  <div key={index} className={`top-nav-item ${item.active ? 'top-nav-item-active' : ''}`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="icon-medium" /> : <Menu className="icon-medium" />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="mobile-nav">
                {navItems.map((item, index) => (
                  <div key={index} className={`mobile-nav-item ${item.active ? 'mobile-nav-item-active' : ''}`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </nav>
          <div className="simple-content">
            <MainContent />
          </div>
        </div>
      );
    }
  };

  // Main content component
  const MainContent = () => (
    <div className="main-content-area">
      <div className="content-section">
        <h1 className="main-title">Welcome to Multi-Theme Switcher</h1>
        <p className="main-description">
          This is a React-based web application demonstrating dynamic theme switching capabilities. 
          The current theme is <span className="theme-highlight">{theme.name}</span>, 
          which changes not only colors but also the layout structure, fonts, spacing, and overall design approach.
        </p>
      </div>

      <div className="feature-box">
        <h2 className="feature-title">Theme Features</h2>
        <ul className="feature-list">
          <li>• Dynamic color schemes with primary and secondary palettes</li>
          <li>• Adaptive layout structures (Simple, Sidebar, Card-based)</li>
          <li>• Typography variations including font weights and styling</li>
          <li>• Responsive design for desktop and mobile devices</li>
          <li>• Smooth transitions and hover effects</li>
        </ul>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3 className="card-title">Sample List Component</h3>
          <ul className="sample-list">
            <li className="list-item">
              <div className="list-bullet"></div>
              <span>Interactive theme switching</span>
            </li>
            <li className="list-item">
              <div className="list-bullet"></div>
              <span>Persistent theme selection</span>
            </li>
            <li className="list-item">
              <div className="list-bullet"></div>
              <span>Mobile-responsive design</span>
            </li>
          </ul>
        </div>

        <div className="content-card">
          <h3 className="card-title">Sample Button</h3>
          <button className="sample-button">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`app-container ${theme.className}`}>
      {/* CSS Styles */}
      <style jsx>{`
        /* Base Styles */
        .app-container {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .icon-small {
          width: 16px;
          height: 16px;
        }

        .icon-medium {
          width: 20px;
          height: 20px;
        }

        /* Fixed Header Styles */
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-title {
          font-size: 18px;
          font-weight: 600;
        }

        .theme-selector {
          position: relative;
        }

        .theme-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .theme-button:hover {
          opacity: 0.9;
        }

        .dropdown-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.2s;
        }

        .dropdown-icon.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 8px);
          width: 192px;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 60;
        }

        .dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .theme-indicator {
          margin-left: auto;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .main-layout {
          padding-top: 64px;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 40;
        }

        /* Layout Styles */
        .layout-sidebar {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 256px;
          padding: 24px;
          border-right: 1px solid;
        }

        .sidebar-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 32px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .main-content {
          flex: 1;
        }

        .content-wrapper {
          padding: 32px;
        }

        .layout-cards {
          min-height: 100vh;
          padding: 24px;
        }

        .cards-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .nav-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .nav-card {
          padding: 24px;
          border-radius: 12px;
          border: 1px solid;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s;
        }

        .nav-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .nav-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: white;
        }

        .nav-card-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .nav-card-description {
          font-size: 14px;
          line-height: 1.5;
        }

        .main-card {
          padding: 32px;
          border-radius: 12px;
          border: 1px solid;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .layout-simple {
          min-height: 100vh;
        }

        .top-nav {
          padding: 16px;
          border-bottom: 1px solid;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-title {
          font-size: 20px;
          font-weight: 600;
        }

        .nav-items {
          display: flex;
          gap: 24px;
        }

        .desktop-nav {
          display: flex;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: background-color 0.2s;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          padding: 16px;
          border-top: 1px solid;
          margin-top: 16px;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 4px;
        }

        .top-nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .simple-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px;
        }

        /* Content Styles */
        .main-content-area {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .main-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .main-description {
          font-size: 18px;
          line-height: 1.6;
        }

        .theme-highlight {
          font-weight: 600;
        }

        .feature-box {
          padding: 24px;
          border-radius: 8px;
          border: 1px solid;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .content-card {
          padding: 24px;
          border-radius: 8px;
          border: 1px solid;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .sample-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .list-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .sample-button {
          width: 100%;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
          color: white;
        }

        .sample-button:hover {
          opacity: 0.9;
        }

        /* Theme 1 - Classic Light */
        .theme-classic {
          --primary-color: #2563eb;
          --secondary-color: #f3f4f6;
          --background-color: #ffffff;
          --text-color: #111827;
          --text-secondary-color: #6b7280;
          --border-color: #e5e7eb;
          --hover-color: #eff6ff;
          --accent-color: #dbeafe;
          --card-color: #f9fafb;
        }

        .theme-classic .fixed-header {
          background-color: var(--secondary-color);
          border-bottom: 1px solid var(--border-color);
        }

        .theme-classic .header-title {
          color: var(--text-color);
          font-family: sans-serif;
        }

        .theme-classic .theme-button {
          background-color: var(--primary-color);
          color: white;
        }

        .theme-classic .dropdown-menu {
          background-color: var(--background-color);
          border: 1px solid var(--border-color);
        }

        .theme-classic .dropdown-item {
          color: var(--text-color);
        }

        .theme-classic .dropdown-item:hover {
          background-color: var(--hover-color);
        }

        .theme-classic .theme-indicator {
          background-color: var(--primary-color);
        }

        .theme-classic .layout-simple {
          background-color: var(--background-color);
        }

        .theme-classic .top-nav {
          background-color: var(--secondary-color);
          border-bottom-color: var(--border-color);
        }

        .theme-classic .nav-title {
          color: var(--text-color);
          font-family: sans-serif;
        }

        .theme-classic .top-nav-item {
          color: var(--text-color);
        }

        .theme-classic .top-nav-item:hover {
          background-color: var(--hover-color);
        }

        .theme-classic .top-nav-item-active {
          background-color: var(--primary-color);
          color: white;
        }

        .theme-classic .mobile-menu-button {
          color: var(--text-color);
        }

        .theme-classic .mobile-menu-button:hover {
          background-color: var(--hover-color);
        }

        .theme-classic .mobile-nav {
          border-top-color: var(--border-color);
        }

        .theme-classic .mobile-nav-item {
          color: var(--text-color);
        }

        .theme-classic .mobile-nav-item:hover {
          background-color: var(--hover-color);
        }

        .theme-classic .mobile-nav-item-active {
          background-color: var(--primary-color);
          color: white;
        }

        .theme-classic .main-title {
          color: var(--text-color);
          font-family: sans-serif;
        }

        .theme-classic .main-description {
          color: var(--text-secondary-color);
        }

        .theme-classic .theme-highlight {
          color: var(--text-color);
        }

        .theme-classic .feature-box {
          background-color: var(--accent-color);
          border-color: var(--border-color);
        }

        .theme-classic .feature-title {
          color: var(--text-color);
          font-family: sans-serif;
        }

        .theme-classic .feature-list {
          color: var(--text-secondary-color);
        }

        .theme-classic .content-card {
          background-color: var(--card-color);
          border-color: var(--border-color);
        }

        .theme-classic .card-title {
          color: var(--text-color);
          font-family: sans-serif;
        }

        .theme-classic .sample-list {
          color: var(--text-secondary-color);
        }

        .theme-classic .list-bullet {
          background-color: var(--primary-color);
        }

        .theme-classic .sample-button {
          background-color: var(--primary-color);
        }

        /* Theme 2 - Dark Mode */
        .theme-dark {
          --primary-color: #9333ea;
          --secondary-color: #1f2937;
          --background-color: #111827;
          --text-color: #ffffff;
          --text-secondary-color: #d1d5db;
          --border-color: #374151;
          --hover-color: #374151;
          --accent-color: #581c87;
          --card-color: #1f2937;
        }

        .theme-dark .fixed-header {
          background-color: var(--secondary-color);
          border-bottom: 1px solid var(--border-color);
        }

        .theme-dark .header-title {
          color: var(--text-color);
          font-family: serif;
          font-weight: bold;
        }

        .theme-dark .theme-button {
          background-color: var(--primary-color);
          color: white;
        }

        .theme-dark .dropdown-menu {
          background-color: var(--background-color);
          border: 1px solid var(--border-color);
        }

        .theme-dark .dropdown-item {
          color: var(--text-color);
        }

        .theme-dark .dropdown-item:hover {
          background-color: var(--hover-color);
        }

        .theme-dark .theme-indicator {
          background-color: var(--primary-color);
        }

        .theme-dark .sidebar {
          background-color: var(--secondary-color);
          border-right-color: var(--border-color);
        }

        .theme-dark .sidebar-title {
          color: var(--text-color);
          font-family: serif;
          font-weight: bold;
        }

        .theme-dark .nav-item {
          color: var(--text-color);
        }

        .theme-dark .nav-item:hover {
          background-color: var(--hover-color);
        }

        .theme-dark .nav-item-active {
          background-color: var(--primary-color);
          color: white;
        }

        .theme-dark .mobile-menu-button {
          color: var(--text-color);
        }

        .theme-dark .mobile-menu-button:hover {
          background-color: var(--hover-color);
        }

        .theme-dark .mobile-nav {
          border-top-color: var(--border-color);
        }

        .theme-dark .mobile-nav-item {
          color: var(--text-color);
        }

        .theme-dark .mobile-nav-item:hover {
          background-color: var(--hover-color);
        }

        .theme-dark .mobile-nav-item-active {
          background-color: var(--primary-color);
          color: white;
        }

        .theme-dark .main-content {
          background-color: var(--background-color);
        }

        .theme-dark .main-title {
          color: var(--text-color);
          font-family: serif;
          font-weight: bold;
        }

        .theme-dark .main-description {
          color: var(--text-secondary-color);
        }

        .theme-dark .theme-highlight {
          color: var(--text-color);
          font-weight: bold;
        }

        .theme-dark .feature-box {
          background-color: var(--accent-color);
          border-color: var(--border-color);
        }

        .theme-dark .feature-title {
          color: var(--text-color);
          font-family: serif;
          font-weight: bold;
        }

        .theme-dark .feature-list {
          color: var(--text-secondary-color);
        }

        .theme-dark .content-card {
          background-color: var(--card-color);
          border-color: var(--border-color);
        }

        .theme-dark .card-title {
          color: var(--text-color);
          font-family: serif;
          font-weight: bold;
        }

        .theme-dark .sample-list {
          color: var(--text-secondary-color);
        }

        .theme-dark .list-bullet {
          background-color: var(--primary-color);
        }

        .theme-dark .sample-button {
          background-color: var(--primary-color);
        }

        /* Theme 3 - Colorful Pacific */
        .theme-colorful {
          --primary-gradient: linear-gradient(135deg, #06b6d4, #3b82f6);
          --secondary-gradient: linear-gradient(135deg, #fbbf24, #f59e0b);
          --background-gradient: linear-gradient(135deg, #ecfeff, #dbeafe);
          --text-color: #1e293b;
          --text-secondary-color: #475569;
          --border-color: #67e8f9;
          --hover-color: #e0f7fa;
          --accent-gradient: linear-gradient(135deg, #e0f7fa, #dbeafe);
          --card-color: rgba(255, 255, 255, 0.8);
        }

        .theme-colorful .fixed-header {
          background: var(--secondary-gradient);
          border-bottom: 1px solid var(--border-color);
        }

        .theme-colorful .header-title {
          color: var(--text-color);
          font-weight: 600;
        }

        .theme-colorful .theme-button {
          background: var(--primary-gradient);
          color: white;
        }

        .theme-colorful .dropdown-menu {
          background-color: var(--card-color);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(10px);
        }

        .theme-colorful .dropdown-item {
          color: var(--text-color);
        }

        .theme-colorful .dropdown-item:hover {
          background-color: var(--hover-color);
        }

        .theme-colorful .theme-indicator {
          background: var(--primary-gradient);
        }

        .theme-colorful .layout-cards {
          background: var(--background-gradient);
          min-height: 100vh;
        }

        .theme-colorful .nav-card {
          background-color: var(--card-color);
          border-color: var(--border-color);
          backdrop-filter: blur(10px);
        }

        .theme-colorful .nav-card-icon {
          background: var(--primary-gradient);
        }

        .theme-colorful .nav-card-title {
          color: var(--text-color);
          font-weight: 600;
        }

        .theme-colorful .nav-card-description {
          color: var(--text-secondary-color);
        }

        .theme-colorful .main-card {
          background-color: var(--card-color);
          border-color: var(--border-color);
          backdrop-filter: blur(10px);
        }

        .theme-colorful .main-title {
          color: var(--text-color);
          font-weight: 600;
        }

        .theme-colorful .main-description {
          color: var(--text-secondary-color);
        }

        .theme-colorful .theme-highlight {
          color: var(--text-color);
          font-weight: 600;
        }

        .theme-colorful .feature-box {
          background: var(--accent-gradient);
          border-color: var(--border-color);
        }

        .theme-colorful .feature-title {
          color: var(--text-color);
          font-weight: 600;
        }

        .theme-colorful .feature-list {
          color: var(--text-secondary-color);
        }

        .theme-colorful .content-card {
          background-color: var(--card-color);
          border-color: var(--border-color);
          backdrop-filter: blur(10px);
        }

        .theme-colorful .card-title {
          color: var(--text-color);
          font-weight: 600;
        }

        .theme-colorful .sample-list {
          color: var(--text-secondary-color);
        }

        .theme-colorful .list-bullet {
          background: var(--primary-gradient);
        }

        .theme-colorful .sample-button {
          background: var(--primary-gradient);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .layout-sidebar {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }

          .nav-cards-grid {
            grid-template-columns: 1fr;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }

          .header-content {
            padding: 8px 16px;
          }

          .header-title {
            font-size: 16px;
          }

          .main-title {
            font-size: 24px;
          }

          .content-wrapper,
          .simple-content {
            padding: 16px;
          }

          .dropdown-menu {
            width: 160px;
            right: -20px;
          }

          .theme-button {
            padding: 6px 12px;
            font-size: 14px;
          }

          .theme-button span {
            display: none;
          }
        }
      `}</style>

      {/* Fixed Theme Switcher Header */}
      <div className="fixed-header">
        <div className="header-content">
          <div className="header-title">
            Multi-Theme Switcher App
          </div>
          
          {/* Theme Dropdown */}
          <div className="theme-selector">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="theme-button"
            >
              {theme.icon}
              <span>{theme.name}</span>
              <ChevronDown className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {Object.entries(themes).map(([key, themeOption]) => (
                  <button
                    key={key}
                    onClick={() => handleThemeChange(key)}
                    className="dropdown-item"
                  >
                    {themeOption.icon}
                    <span>{themeOption.name}</span>
                    {currentTheme === key && (
                      <div className="theme-indicator"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content with top padding to account for fixed header */}
      <div className="main-layout">
        {renderLayout()}
      </div>

      {/* Click outside to close dropdown */}
      {(dropdownOpen || mobileMenuOpen) && (
        <div 
          className="overlay" 
          onClick={() => {
            setDropdownOpen(false);
            setMobileMenuOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default MultiThemeSwitcher;