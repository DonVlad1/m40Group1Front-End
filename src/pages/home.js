import React from "react"
import { useNavigate } from "react-router-dom";
import '../css/home.css';

function Home() {
    // test comment
    const navigate = useNavigate();

    const navigateToBrowse = async () => {
        await navigate("/browse")
    }

    return (
        <div id="homeContent">
            <h1>All about the drive</h1>
            <h2>Find the car that is right for your journey</h2>
            <div className='btn'>
                <button onClick={() => navigateToBrowse()}>Browse</button>
            </div>
            <div className='icon'>

            </div>
        </div>
    )
}

export default Home