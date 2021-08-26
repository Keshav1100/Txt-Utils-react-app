import React ,{useState}from 'react'

export default function About() {
    const [mystyle, setMystyle] = useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btnText, setbtnText] = useState("Enable dark mode")
    const toggleBtn = ()=>{
        if(mystyle.color==="black"){
            setMystyle({
            color:"white",
            backgroundColor:"black"
            
        })
        setbtnText("Enable white mode");
}
        else{
            setMystyle({
                color:"black",
                backgroundColor:"white"
                 
                })  
                setbtnText("Enable dark mode")
        }
    
    }
    return (
        <div style={mystyle}>
            <h1 className="my-3">About Us</h1>
            <p>TextUtils is a text analyzer service provided for easy or common purposes. We hope that our services gives the user best experience.</p>
            <button onClick={toggleBtn} className="btn btn-primary">{btnText}</button>
            
        </div>
    )
    }
