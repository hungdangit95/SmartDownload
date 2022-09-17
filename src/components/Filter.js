import React from 'react'

const Filter = () => {
    return (
        <div class="filter-container">
            <div class="filter-description">
                <h2>
                    Smart Video Downloader
                </h2>
                <span>Tiktok Downloader, Download video Tiktok Without Watermark</span>
            </div>
            <div class="search-form">
                <div class="col-input">
                    <input type="text" id="filter" class="filter" placeholder="Paste your video link here"> </input>
                </div>
                <div class="col-button">
                    <button type="submit" id="search" class="btn btn-lg btn-danger"><span
                        class="d-none d-md-inline">Download</span> <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter
