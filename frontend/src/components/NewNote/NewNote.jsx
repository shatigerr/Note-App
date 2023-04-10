import React from "react";
import { useState } from "react";

const NewNote = ({newNote}) => {

    
    const [inputData,setInputData] = useState({title:"",body:""});
    const updateTitle = (e) => {
        setInputData({
            ...inputData,
            title: e.target.value
        });

        
    }

    
    const updateBody = (e) => {
        setInputData({
            ...inputData,
            body: e.target.value
        });
        
    }

    const submitNewNote = (e) => {
        e.preventDefault()
        newNote(inputData);

        setInputData({
            title:"",
            body:""
        })
        
    }

    return(
        <div>
            <form className="text-center mt-10 mb-10  " onSubmit={submitNewNote}>
                <div className="inline-block justify-center items-center rounded-md border-2 border-black p-8 bg-newNotebg" >
                    <div className="flex flex-col text-left">
                        <label className="mr-2 mb-2 text-black " htmlFor="">Title:</label>
                        <input className="w-60 rounded-md border-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  focus:ring-inset focus:ring-letter border-black" value={inputData.title} onChange={updateTitle} type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col text-left">
                        <label className="mt-3 mb-2 mr-2 text-black" htmlFor="">Body:</label>
                        <textarea className="w-60 h-16  rounded-md border-2 border-black py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  focus:ring-inset focus:ring-letter sm:text-s   m sm:leading-6" maxLength={100} value={inputData.body} onChange={updateBody}  name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className=" mt-8 w-60 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default NewNote;