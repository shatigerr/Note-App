import React from "react";
import { useState,useEffect } from "react";
const SearchNotes = ({data, filteredData}) => {
    const [inputText,setInputText] = useState("");
    const [noItems,setNoItems] = useState(false);
    
    const searchHandler = (e) => {
        let filtered = data.filter(element => element.title.includes(e.target.value))
        setInputText(e.target.value)
        if(filtered.length == 0) setNoItems(true);  
        else setNoItems(false);
        
        filteredData(filtered,inputText.length,inputText);
    }


    return(
        <div className="flex flex-col justify-center items-center">
            <label className="" htmlFor="">Search a note title: </label>
            <input placeholder="Search a note tilte" className="rounded-md w-72 border-black border-2 mt-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={searchHandler} type="text" />
        </div>
        
    )
}


export default SearchNotes;