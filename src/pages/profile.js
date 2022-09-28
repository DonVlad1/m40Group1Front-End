import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/profile.css';
import { deleteUser, updateEmail, updateName, updatePassword, updatePhone } from "../utils";
import { FaUserCircle } from "react-icons/fa"
import { MdSaveAlt, MdLibraryAdd, MdConstruction } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

function Profile({loggedIn, token, setLoggedIn, setUser, user, setEmail, email, setAdmin, setPhone, phone}) {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [password, setPassword] = useState()
    const [editName, setEditName] = useState()
    const [editEmail, setEditEmail] = useState()
    const [editPhone, setEditPhone] = useState()
    const [error, setError] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await updateName(token, editName, setUser, setError)
        await updateEmail(token, editEmail, setEmail, setError)
        await updatePhone(token, editPhone, setPhone)
        await updatePassword(token, password)
            setTimeout(() => {
                togalEditModal()
            }, 3500);
      
        
      }

    const toggleModal = () => {
        console.log(loggedIn)
        setModal(!modal)
      }

    const togalEditModal = () => {
        if(error === "email already exists" || error === "username already exists"){
            console.log(error)
            setEditModal(true)
            setError("") 
        }else {
            console.log("toggle modal")
            setEditModal(!editModal)
        }
    }

    const confirmDelete = async () => {
        await deleteUser(token)
        await setAdmin(false)
        await navigate("/login")
      }

    const logoutFunc = async () => {
        console.log("logged out")
        await setLoggedIn(false)
        await setAdmin(false)
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
            <div id="postCreateContent" >
                {/* <form id="postCreateForm">
                    <input type="text" className="search_input" placeholder="Search"/>
                </form> */}
                <div className="container-top">
                    <div className="container-profile">
                      <div className="container-profile-title-btn">
                        <h1 className="container-profile-title">My Profile</h1>
                        <button className="edit-profile" onClick={togalEditModal}><AiTwotoneEdit/></button>
                      </div>
                        <div className="container-profile-info">
                            <div className="user-icon">
                                <FaUserCircle />
                            </div>
                            <div className="container-profile-details">
                                <h1 className="profile-detail">{user}</h1>
                                <h1 className="profile-detail">{email}</h1>
                                <h1 className="profile-detail">{phone}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container-items">
                        <div className="container-items-title-btn">
                            <h1 className="items-title">My Items</h1>
                            <button className="add" onClick={() => listPage()}><MdLibraryAdd /></button>
                        </div>
                        <div className="container-items-input">
                            <input type="text" className="list-items__input" placeholder="You currently do not have any items for sale"/>
                        </div>
                    </div>
                </div>
                <div className="container-bottom">
                    <div className="container-bio">
                        <div className="container-bio-title-btn">
                            <h1 className="bio-title">Bio</h1>
                            <button className="save" ><MdSaveAlt/></button>
                            <button className="edit"><AiTwotoneEdit/></button>
                        </div>
                        <div className="container-bio-input">
                            <input type="text" className="bio__input" placeholder="Enter a bio"/>
                        </div>
                    </div>
                    <div className="profile-btns">
                        <button className="logout" onClick={() => logoutFunc()}><span>LOG OUT</span></button>
                        <button className="delete-acc" onClick={toggleModal}><span>DELETE ACCOUNT</span></button>
                    </div>
                </div>
                {modal && (
                          <div className="modal">
                          <div className="overlay" onClick={toggleModal}></div>
                          <div className="modal-content">
                          <button className="closeBtn" onClick={toggleModal}>X</button>
                            <h1 className="modal-title">Are you sure you want to delete your account?</h1>
                            <button className="modal-delete" onClick={() => confirmDelete() }><span>DELETE ACCOUNT</span></button>
                          </div>
                        </div>
                )}
                {editModal && (
                          <div className="modal">
                          <div className="overlay" onClick={togalEditModal}></div>
                          <div className="modal-content">
                            <button className="closeBtn" onClick={togalEditModal}>X</button>
                            {error ? (
                                <div className="errorDivClassForEdit">
                                    <p className="errorMessageClassForEdit">{error}!</p>
                                </div>
                            ): (
                                <></>
                            )}
                          
                            <h1 className="modal-title">Edit Profile Info</h1>
                            <form onSubmit = {submitHandler}>
                            <div className="modal-input">
                                <input onChange={(event) => setEditName(event.target.value)} placeholder={user} className="signUpInput" required/>
                                <input onChange={(event) => setEditEmail(event.target.value)} placeholder={email} className="signUpInput" required/>
                                <input onChange={(event) => setEditPhone(event.target.value)} placeholder={phone} className="signUpInput" required/>
                                <input onChange={(event) => setPassword(event.target.value)} placeholder="New Password" className="signUpInput" required/>
                            </div>
                            <div className="modal-btns">
                              <button className="modal-cancel" onClick={togalEditModal}>CANCEL</button>
                              <button className="modal-save" type="submit">SAVE</button>
                            </div>
                            </form>
                          </div>
                        </div>
                )}
                </div>

            </div>)}

        </div>
    )
}

export default Profile