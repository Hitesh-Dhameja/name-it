import React from 'react'
import './NameCard.css'

const cheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

function NameCard({ suggestedName }) {
    return (
        <a 
        target="_blank" 
        rel="noreferrer"
        className="card-link" 
        href={`${cheapUrl}${suggestedName}`}
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard
