import React from "react"
import '../css/home.css';

function Home() {
    return (
        <div id="homeContent">
            <img src='./images/carlogo.png' alt=''/>
            <h1>All about the drive</h1>
            <h2>Find the car that is right for your journey</h2>
            <div className='btn'>
                <button>Browse</button>
            </div>
            <div className='icon'>

            </div>
        </div>
    )
}

export default Home