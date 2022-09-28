import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/browse.css';
import BrowseCard from "../components/BrowseCard";
import { listPosts } from "../utils";

const Browse = ({loggedIn}) => {
  const cameraAngle = ["01", "05", "09", "13", "17", "21", "22", "23", "25", "27", "28", "29", "51"]


  const [search, setSearch] = useState('');
  // Cars needs to be set, and each car needs to rendered separately. At the moment, car rendering is hard coded
  const [posts, setPosts] = useState([])

  const loadPosts = async () => {
    let posts = await listPosts()
    setPosts(posts)
    console.log(posts)
  }

  useEffect(() => {
    loadPosts()
  },[])

  return (
    <div id="browseContainer">
      {!loggedIn ? 
      (<div>
        <div id="login-message">
        <h1>You are currently not logged in</h1>
        <h2>Please click <Link to="/login" id="accountCreateLink">here</Link> to log in</h2>
        </div>
      </div>) : 
      (<div>
        {/* <div class="search">
          <input type="text" className="search__input" placeholder="Search" onChange={(event) => setSearch(event.target.value)}/>
          <button className="search__button">
          <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
          </svg>
          </button>
        </div> */}

        <div class="carsContainer">
          {posts?.map((post, index) => (
            <BrowseCard key={index} title={post.title} info={`${post.make} ${post.model}`} price={post.price} imageSource={`https://cdn-08.imagin.studio/getImage?&customer=gbmarkmccarthycompany&make=${post.make}&modelFamily=${post.model}&angle=${cameraAngle[Math.floor(Math.random() * cameraAngle.length)]}`}/>
          ))}
        </div>
      </div>)}
    </div>

  )

}

export default Browse
