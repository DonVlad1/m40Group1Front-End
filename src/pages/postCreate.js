import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../css/postCreate.css';

function PostCreate() {
    const editorRef = useRef(null);
    const log = () => {
    if (editorRef.current) {
        console.log(editorRef.current.getContent());
    }
    };
    return (
        <div id="postCreateContent" className="flexbox">
            <form id="postCreateForm" className="flexbox">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />

                <div id='postCreateColumnHolder' className='flexbox'>
                    <div className='postCreateColumns flexbox'>
                        <label htmlFor="price">Price (£)</label>
                        <input id="price" type="number" name="price" />

                        <label htmlFor="make">Make</label>
                        <input type="text" name="make" />

                        <label htmlFor="model">Model</label>
                        <input type="text" name="model" />

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
                    </div>

                    <div className='postCreateColumns flexbox'>
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
                    </div>
                </div>

                <label htmlFor="text">History/General Info</label>
                <div id='wiz'>
                    <Editor
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
                    />
                </div>

                <button onClick={log}>submit</button>
            </form>
        </div>
    )
}

export default PostCreate