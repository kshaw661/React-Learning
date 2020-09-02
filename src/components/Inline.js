import React from 'react'
const heading = {
    fontSizee :'42px',
    color: 'magenta'
    
}
function Inline() {
    return (
        <div className="col-lg-12">
            <h1 className="error">Error</h1>
            <h1 style={heading}>Inline</h1>
            
        </div>
    )
}

export default Inline
