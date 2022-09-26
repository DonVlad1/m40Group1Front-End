import React, { useState } from "react";
import '../css/browse.css';
import BrowseCard from "../components/BrowseCard";

const Browse = () => {

  const [search, setSearch] = useState('');
  // Cars needs to be set, and each car needs to rendered separately. At the moment, car rendering is hard coded
  const [cars, setCars] = useState([])

  return (
    <div>
      <div class="search">
        <input type="text" className="search__input" placeholder="Search" onChange={(event) => setSearch(event.target.value)}/>
        <button className="search__button">
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
        </button>
      </div>

      <div class="carsContainer">
        <BrowseCard title="Nissan" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
        <BrowseCard title="land rover" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
        <BrowseCard title="Nissan" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
        <BrowseCard title="Nissan" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
        <BrowseCard title="Nissan" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
        <BrowseCard title="Nissan" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
        <BrowseCard title="Nissan" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
        <BrowseCard title="vauxhall" info="extra info" price="£21,395" imageSource={"https://via.placeholder.com/400x300"}/>
      </div>

    </div>

  )

}

export default Browse
