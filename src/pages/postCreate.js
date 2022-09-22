import React from "react"
import '../css/postCreate.css';



function PostCreate() {
    return (
        <div id="postCreateContent" className="flexbox">
            <form id="postCreateForm" className="flexbox">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
            
                <label htmlFor="price">Price (£)</label>
                <input id="price" type="number" name="price" />

                <label htmlFor="make">Make</label>
                <select name="make">
                    <option value="Audi">Audi</option>
                    <option value="Mercades">Mercades</option>
                    <option value="Saab">Saab</option>
                </select>

                <label htmlFor="model">Model</label>
                <select name="model">
                    <option value="Slk 400">Slk 400</option>
                    <option value="Polo">Polo</option>
                    <option value="Gold">Golf</option>
                </select>

                <label htmlFor="type">Type</label>
                <select name="type">
                    <option value="Coupe">Coupe</option>
                    <option value="Sedan">Sedan</option>
                    <option value="GT">GT</option>
                </select>

                <label htmlFor="drivechain">Drivechain</label>
                <select name="drivechain">
                    <option value="FWD">FWD</option>
                    <option value="RWD">RWD</option>
                    <option value="4WD">4WD</option>
                </select>

                <label htmlFor="year">Year</label>
                <select name="year">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>

                <label htmlFor="miles">Miles</label>
                <input type="number" name="miles" />

                <label htmlFor="colour">Colour</label>
                <input type="text" name="colour" />

                <label htmlFor="doors">Doors</label>
                <select name="doors">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label htmlFor="location">Location</label>
                <input type="text" name="location" />

                <label htmlFor="text">WIZYWIG</label>
                <input type="text" name="text" />

                <button>submit</button>
            </form>
        </div>
    )
}

export default PostCreate