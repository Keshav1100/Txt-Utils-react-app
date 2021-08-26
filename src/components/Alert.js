import React from 'react'

export default function Alert(props) {
    const handleCapitalClick = (text)=>{
        let newText = text.toLowerCase();
        let start = text.charAt(0).toUpperCase();
        newText = newText.slice(1,)
        return start + newText;
    }
    return (
        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{handleCapitalClick(props.alert.type)}! </strong>{props.alert.msg}
            </div>
        </div>
    )
}
