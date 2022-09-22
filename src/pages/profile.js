import React from "react"
import '../css/profile.css';

function Profile() {
    return (
        <>
            <div id="postCreateContent" className="flexbox">
                <form id="postCreateForm">
                    <input />
                </form>
            </div>
                <h1 className="profile">My Profile</h1>
                <h1 className="bio-title">Bio</h1>
                <div class="bio">
                <input type="text" class="bio__input" placeholder="Enter a bio"/>
                </div>
                <h1 className="items-title">My Items</h1>
                <div class="list-items">
                <input type="text" class="list-items__input" placeholder="You currently do not have any items for sale"/>
                </div>
                <div className="profile-btns">
                <button className="logout"><span>LOG OUT</span></button>
                <button className="delete-acc"><span>DELETE ACCOUNT</span></button>
                </div>

        </>
    )
}

export default Profile