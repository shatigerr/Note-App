import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import UpdateNote from "../UpdateNote/UpdateNote";
const AllNotes = ({ data, filtered, length,searchInput }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateValue, setUpdateValue] = useState({ title: "", body: "" });
  const [updateID, setUpdateID] = useState("");
  const updateRef = useRef(null);
  const updateHandler = (item) => {
    setShowUpdate(true);
    setUpdateID(item._id);
    setUpdateValue({
      title: item.title,
      body: item.body,
    });
  };

  const updatedForm = (bool) => {
    setShowUpdate(bool);
  };

  const deleteNote = async (_id) => {
    await axios.delete(`http://localhost:3000/notes/${_id}`);
  };


if(data.length == 0){
    return(
        <h1 className="text-6xl text-center">ANY NOTE WAS ENTERED </h1>
    )
}
else if(filtered.length == 0 && length != 0 ){
  return(
    <h1 className="text-6xl text-center">ANY NOTE WAS FOUND </h1>
)
  
}else
    return (
    <>
    <div className="flex flex-wrap justify-around items-center "> 
        {(filtered.length == 0 ? data : filtered).map((item) => (
        <div className="border-2 h-56 mb-3 ml-2 p-5 bg-newNotebg border-black rounded-md max-w-xs" key={item._id}>
            <h2 className="text-3xl text-left">{item.title}</h2>
            <p className="text-right break-all ">{item.body}</p>
            
            <div className="flex flex-col itmes-end ml-5 w-full">
              <div>

              <button className="m-3 border-2 w-16 bg-red-600 p-1 rounded-md" onClick={() => deleteNote(item._id)}>Delete</button>
              <button className="m-3 w-16 bg-indigo-600 text-white p-1 rounded-md " onClick={() => {
                updateHandler(item) ;
                updateRef.current.scrollIntoView({ behavior: "smooth" });
              }}>Update</button>
              </div>
              
              <p className="text-gray-50  text-right bg-gray-950">id: {item._id}</p>
            </div>
        </div>
        ))}
    </div>
        <div ref={updateRef}>

          {showUpdate ? (
          <UpdateNote
              _id={updateID}
              updated={updatedForm}
              updateValue={updateValue}
              
          />
          ) : (
          ""
          )}
        </div>
        
    
    </>
    );
  
};

export default AllNotes;
