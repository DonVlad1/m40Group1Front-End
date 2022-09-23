import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/profile.css';
import { deleteUser } from "../utils";

function Profile(props) {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false)
    const [token, setToken] = useState("")
    //change to false 

    //also move to app.js
    const [loggedIn, setLoggedIn] = useState(true) 
    //

    const toggleModal = () => {
        console.log(loggedIn)
        setModal(!modal)
      }

    const submitHandler2 = async (event) => {
        event.preventDefault()
        await deleteUser(token)
      }

    const logoutFunc = async () => {
        console.log("logged out")
        await setLoggedIn(false)
        await navigate("/login")
    }
    

    return (
        <>
            {!loggedIn ? 
            (<div> 
                <h1>You are not logged in</h1>
            </div>) : 
            (<div>
            <div id="postCreateContent" className="flexbox">
                <form id="postCreateForm">
                    <input />
                </form>
            </div>
                <h1 className="profile">My Profile</h1>
                <div className="img-container"></div>
                <div className="profile-info">
                    <h3>Username</h3>
                    <h3>display name</h3>
                    <h3>Email</h3>
                    <h3>location</h3>
                </div>
                <h1 className="bio-title">Bio</h1>
                <div class="bio">
                <input type="text" class="bio__input" placeholder="Enter a bio"/>
                </div>
                <h1 className="items-title">My Items</h1>
                <div class="list-items">
                <input type="text" class="list-items__input" placeholder="You currently do not have any items for sale"/>
                </div>
                <div className="profile-btns">
                <button className="logout" onClick={() => logoutFunc()}><span>LOG OUT</span></button>
                <button className="delete-acc" onClick={toggleModal}><span>DELETE ACCOUNT</span></button>
                {modal && (
                          <div className="modal">
                          <div className="overlay" onClick={toggleModal}></div>
                          <div className="modal-content">
                          <img className="modalCat"/>
                            <h2>Are you sure you want to delete your account?</h2>
                            <button className="delete-acc" onClick={() => submitHandler2() }><span>DELETE ACCOUNT</span></button>
                            <button className="cloaseBtn" onClick={toggleModal}>Close</button>
                          </div>
                        </div>
                )}
                </div>

            </div>)}

        </>
    )
}

export default Profile