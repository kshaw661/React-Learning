import React from 'react'
import './myStyle.css'; 
function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div clasName="row">
            <div className="col-lg-12">
                <h2 className={`${className} font-xl text-center`}>StyleSheet</h2>
            </div>
        </div>
    )
}

export default StyleSheet
