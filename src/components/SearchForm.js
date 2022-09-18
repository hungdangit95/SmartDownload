import React from 'react'

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="col-input">
        <input type="text" id="filter" className="filter" placeholder="Paste your video link here" />
      </div>
      <div className="col-button">
        <button type="submit" id="search" className="btn btn-lg btn-danger"><span
          className="d-none d-md-inline">Download</span> <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchForm
