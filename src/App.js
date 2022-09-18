import React from 'react'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import Faq from './components/Faq'
import Footer from './components/Footer'
function App() {
    return (
        <div className="container">
            <div className="section1">
                <Navbar />
                <div className="filter-container">
                    <div className="filter-description">
                        <h2>
                            Smart Video Downloader
                        </h2>
                        <span>Tiktok Downloader, Download video Tiktok Without Watermark</span>
                    </div>
                    <SearchForm />
                </div>
            </div>
            <Faq />
            <Footer />
        </div>
    )
}

export default App
