import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="container">
    <div className="section1">
        <nav className="navbar">
            <a className="navbar-logo">
                <h2 className="h2-logo"><span className="logo-span1">Smart</span><span className="logo-span2">Downloader</span>
                </h2>
            </a>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
              
                <div className="menu">
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">Blog</a></li>
                    <li className="services">
                        <a href="/" className="dropdown-toggle">
                            <img alt='' style={{filter: 'brightness(0) invert(1)'}}
                                src="https://steptodown.com/wp-content/themes/aiodl-default/assets/icons/translation.svg"
                                height="28" width="28"></img></a>
                    
                        <ul className="dropdown">
                            <li><a href="/">VietNam</a></li>
                            <li><a href="/">English </a></li>
                            <li><a href="/">France</a></li>
                        </ul>
                    </li>
                </div>
            </ul>
        </nav>
        <div className="filter-container">
            <div className="filter-description">
                <h2>
                    Smart Video Downloader
                </h2>
                <span>Tiktok Downloader, Download video Tiktok Without Watermark</span>
            </div>
            <div className="search-form">
                <div className="col-input">
                    <input type="text" id="filter" className="filter" placeholder="Paste your video link here"/> 
                </div>
                <div className="col-button">
                    <button type="submit" id="search" className="btn btn-lg btn-danger"><span
                            className="d-none d-md-inline">Download</span> <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="section2">

    </div>
    <div className="section3 faq accordion">
        <div className="item">
            <p className="number">01</p>
            <p className="text">Do I have to pay to download TikTok video?</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden-box">
                <p>

                    No, you don't have to pay for anything, because our service is always free! We support all
                    modern browsers such as Google Chrome, Mozilla Firefox, Safari, Microsoft Edge etc.
                </p>
               
            </div>
        </div>
        <div className="item open">
            <p className="number">02</p>
            <p className="text">Do I need to install extensions to use TikTok downloader?</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden-box">
                <p>

                    No. To save and remove the watermark from TikTok online, you just need a link. Paste it into the
                    input field and select the appropriate format for conversion. Our TikTok watermark remover will
                    do the rest.
                </p>
               
            </div>
        </div>
        <div className="item">
            <p className="number">03</p>
            <p className="text">Where are TikTok videos saved after downloading?</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden-box">
                <p>
                    When you save from TikTok without trademark, files are usually saved to your default location.
                    In your browser settings, you can change and manually select the destination folder for your
                    downloaded TikTok videos.
                </p>
                
            </div>
        </div>
        <div className="item">
            <p className="number">04</p>
            <p className="text">Do I need to have a TT account to download TikTok videos?</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden-box">
                <p>
                    No, you do not need to have a TT account. You can launch TikTok video download when you have a
                    link to it, just paste it into the input field at the top of the page and click "Download". Our
                    TikTok download service will remove the watermark from TikTok and the video will be ready to use
                    in a few seconds.
                </p>
               
            </div>
        </div>
        <div className="item">
            <p className="number">05</p>
            <p className="text">How to get link for TikTok videos?</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden-box">
                <p>

                    Open the TT app and Choose the video you want to save. Click "Share" and then "Copy Link". Your
                    TikTok video download without watermark URL is ready on your clipboard.
                </p>
               
            </div>
        </div>
        <div className="item">
            <p className="number">06</p>
            <p className="text">Can your TikTok video downloader save videos from personal accounts?</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden-box">
                <p>
                    No, you do not need to have a TT account. You can launch TikTok video download when you have a
                    link to it, just paste it into the input field at the top of the page and click "Download". Our
                    TikTok download service will remove the watermark from TikTok and the video will be ready to use
                    in a few seconds.
                </p>
               
            </div>
        </div>
    </div>
    <div className="section4 footer">
        <div className="footer-content">
            <p className="copyright">
                Copyright &copy; 2020, Smart Downloader - All Rights Reserved
            </p>
            <div className="social-list">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
        <a href="#" className="scroll-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
              </svg>
              
        </a>
    </div>
</div>
  )
}

export default App
