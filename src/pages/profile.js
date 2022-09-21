import React from "react"
import '../css/profile.css';

function Profile() {
    return (
        <>
            <div id="postCreateContent" className="flexbox">
                <h1>My Profile</h1>
                <button>Log Out</button>
                <button>Delete Account</button>
                <form id="postCreateForm">
                    <input />
                </form>
            </div>
        </>
    )
}

export default Profile