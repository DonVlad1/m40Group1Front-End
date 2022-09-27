import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/profile.css';
import { deleteUser } from "../utils";
import { FaUserCircle } from "react-icons/fa"
import { MdSaveAlt, MdLibraryAdd } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

function Profile({loggedIn, setLoggedIn, user, email}) {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false)
    const [token, setToken] = useState("")

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

    const listPage = async () => {
        await navigate("/postCreate")
    }
    

    return (
        <div id="profile-container">
            {!loggedIn ? 
            (<div>
                <div id="login-message">
                <h1>You are currently not logged in</h1>
                <h2>Please click <Link to="/login" id="accountCreateLink">here</Link> to log in</h2>
                </div>
            </div>) : 
            (<div>
            <div id="postCreateContent">
                <form id="postCreateForm">
                    <input type="text" className="search_input" placeholder="Search"/>
                </form>
                <div className="profile-info">
                <h1 className="profile">MY PROFILE</h1>
                <div className="user-icon"><FaUserCircle/></div>
                    <h1>{user}</h1>
                    <h1>display name</h1>
                    <h1>{email}</h1>
                    <h1>location</h1>
                </div>
                <div className="random">
                <br></br> <br></br> <br></br> <br></br>
                <div class="list-items">
                <h1>MY ITEMS<button className="add" onClick={() => listPage()}><MdLibraryAdd/></button></h1>
                <input type="text" class="list-items__input" placeholder="You currently do not have any items for sale"/>
                </div>
                <div class="bio">
                <h1>BIO<button className="save"><MdSaveAlt/></button> <button className="edit"><AiTwotoneEdit/></button></h1>
                <input type="text" class="bio__input" placeholder="Enter a bio"/>
                </div>
                </div>
                <div className="profile-btns">
                    <button className="logout" onClick={() => logoutFunc()}><span>LOG OUT</span></button>
                    <button className="delete-acc" onClick={toggleModal}><span>DELETE ACCOUNT</span></button>
                </div>
                {modal && (
                          <div className="modal">
                          <div className="overlay" onClick={toggleModal}></div>
                          <div className="modal-content">
                          <img className="modalCat"/>
                          <button className="closeBtn" onClick={toggleModal}>X</button>
                            <h2>Are you sure you want to delete your account?</h2>
                            <button className="delete-acc" onClick={() => submitHandler2() }><span>DELETE ACCOUNT</span></button>
                          </div>
                        </div>
                )}
                </div>

            </div>)}

        </div>
    )
}

export default Profile