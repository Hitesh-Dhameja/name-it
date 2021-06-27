import React from 'react'
import './ResultsContainer.css'
import NameCard from '../NameCard/NameCard'

function ResultsContainer({ SuggestedNames }) {
    const suggestednameJSx = SuggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    })

    return (
        <div className="result-container">
            {suggestednameJSx}
        </div>
    )
}

export default ResultsContainer
