import React from "react";
import axios from "axios";

import { useState,useEffect } from "react";

const UpdateNote = ({_id, updated, updateValue}) => {

    const [updateData, setUpdateData] = useState({title:"",body:""});

    useEffect(() => {
        setUpdateData(updateValue)
    },[updateValue])

    const changeTitleHandler = (e) => {
        setUpdateData({
            ...updateData,
            title:e.target.value
        })
    }

    const changeBodyHandler = (e) => {
        setUpdateData({
            ...updateData,
            body:e.target.value
        })
    }

    const updateHandler = (_id) => {

        if(updateData.title.length != 0 || updateData.title.length != 0 ){
            axios.put(`http://localhost:3000/notes/${_id}`,updateData);
            updated(false);
        }

    }

    return(
        <div className="flex flex-col justify-center items-center">
            <input className="border-2 w-72 border-black rounded-sm" onChange={changeTitleHandler} value={updateData.title} type="text" placeholder="Title"/>
            <textarea className="border-2 w-72 h-36 border-black rounded-sm" onChange={changeBodyHandler} value={updateData.body} name="" id="" cols="30" rows="10" placeholder="body"></textarea>
            <button className="m-2 bg-indigo-500 w-72 border-2 rounded-md border-black" onClick={() => updateHandler(_id)} type="submit">Update</button>
            <button className="m-2 bg-red-500 w-72 border-2 rounded-md border-black" onClick={() => updated(false)}>Cancel</button>
        </div>
    )
}


export default UpdateNote;