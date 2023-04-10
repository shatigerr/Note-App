import { useState, useEffect } from 'react'
import AllNotes from './components/AllNotes/AllNotes';
import NewNote from './components/NewNote/NewNote';
import SearchNotes from './components/SearchNote/SearchNote';
import axios from 'axios'

import './App.css'

function App() {

  const SERVER_URL = 'http://localhost:3000/notes';
  
  const [data, setData] = useState([])
  const [fData, setfData] = useState([])
  const [inputLength, setInputLength] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const fetchingNotes = async () => {
    const res = await axios.get(SERVER_URL);
    setData(res.data.allNotes)
  }

  const newNote = async (data) => {
    await axios.post(SERVER_URL,data);
  }

  useEffect(() => {
    fetchingNotes()
  },[data])

  const filteredData = (filtered,length,input) => {
    setfData(filtered);
    setInputLength(length);
    setSearchInput(input)
    
  }

  return (
    <main>
      <h1 className='text-center m-5 text-6xl'>!Note APP!</h1>
      <SearchNotes data={data} filteredData={filteredData} />
      <NewNote newNote={newNote} />
      <AllNotes data={data} filtered={fData} length={inputLength} searchInput={searchInput}  />
    </main>
  );
}

export default App;
