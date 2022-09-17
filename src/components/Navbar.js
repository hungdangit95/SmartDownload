import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">

      <a href="#" className="navbar-logo">
        <h2 className="h2-logo"><span className="logo-span1">Smart</span><span className="logo-span2">Downloader</span>
        </h2>
      </a>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

        <div className="menu">
          <li><a href="/">FAQs</a></li>
          <li><a href="/">Blog</a></li>
          <li className="services">
            <a href="/" className="dropdown-toggle">
              <img alt='' style={{ filter: 'brightness(0) invert(1)' }}
                src="https://steptodown.com/wp-content/themes/aiodl-default/assets/icons/translation.svg"
                height="28" width="28">
              </img>
            </a>
            <ul className="dropdown">
              <li><a href="/">VietNam</a></li>
              <li><a href="/">English </a></li>
              <li><a href="/">France</a></li>
            </ul>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
