import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </a>
        </div>
    )
}

export default Footer
