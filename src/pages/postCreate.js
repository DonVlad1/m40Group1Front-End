import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../css/postCreate.css';
import { postCreate } from '../utils';



function PostCreate() {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [make, setMake] = useState()
    const [model, setModel] = useState()
    const [type, setType] = useState("Coupe")
    const [drivechain, setDrivechain] = useState("FWD")
    const [yearString, setYearString] = useState(2022)
    const [miles, setMiles] = useState()
    const [colour, setColour] = useState()
    const [doors, setDoors] = useState("2")
    const [location, setLocation] = useState()
    const [wiz, setWiz] = useState("wiz is a stretch goal, this is a default state")

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log("postCreate.js submitHadler", title)
        
        const year = Number(yearString)
        const formatedModel = model.replace(" ", "-");
        let priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        priceFormat = "£" + priceFormat

        await postCreate(title, priceFormat, make, formatedModel, type, drivechain, year, miles, colour, doors, location, wiz)
        window.location.href = "/browse"
    }

    // const editorRef = useRef(null);

    // const log = () => {
    // if (editorRef.current) {
    //     editorRef.current.getContent()
    // }
    // };

    return (
        <div id="postCreateContent" className="flexbox">
            <form id="postCreateForm" className="flexbox" onSubmit = {submitHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={(event) => setTitle(event.target.value)} />

                <div id='postCreateColumnHolder' className='flexbox'>
                    <div className='postCreateColumns flexbox'>
                        <label htmlFor="price">Price (£)</label>
                        <input id="price" type="number" name="price" onChange={(event) => setPrice(event.target.value)} />

                        <label htmlFor="make">Make</label>
                        <input type="text" name="make" onChange={(event) => setMake(event.target.value)} />

                        <label htmlFor="model">Model</label>
                        <input type="text" name="model" onChange={(event) => setModel(event.target.value)} />

                        <label htmlFor="type">Type</label>
                        <select name="type" onChange={(event) => setType(event.target.value)}>
                            <option value="Coupe">Coupe</option>
                            <option value="Sedan">Sedan</option>
                            <option value="GT">GT</option>
                        </select>

                        <label htmlFor="drivechain">Drivechain</label>
                        <select name="drivechain" onChange={(event) => setDrivechain(event.target.value)}>
                            <option value="FWD">FWD</option>
                            <option value="RWD">RWD</option>
                            <option value="4WD">4WD</option>
                        </select>
                    </div>

                    <div className='postCreateColumns flexbox'>
                        <label htmlFor="year">Year</label>
                        <select name="year" onChange={(event) => setYearString(event.target.value)}>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>

                        <label htmlFor="miles">Miles</label>
                        <input type="number" name="miles" onChange={(event) => setMiles(event.target.value)} />

                        <label htmlFor="colour">Colour</label>
                        <input type="text" name="colour" onChange={(event) => setColour(event.target.value)} />

                        <label htmlFor="doors">Doors</label>
                        <select name="doors" onChange={(event) => setDoors(event.target.value)}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" onChange={(event) => setLocation(event.target.value)} />
                    </div>
                </div>

                <label htmlFor="text">History/General Info</label>
                <div id='wiz'>
                    {/* <Editor onChange={(event) => setWiz(event.target.value)}
                        onInit={(evt, editor) => editorRef.current = editor}
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    /> */}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate