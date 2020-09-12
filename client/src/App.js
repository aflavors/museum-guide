import React, { useState } from "react";
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import Search from './components/Search'
import "./App.css";


const App = () => {
  const [objects, setObjects] = useState([]);

  //Search Museum Objects (text from Search Form)
  const searchObjects = async (text) => {
    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${text}`);
    console.log(res.data)
    //Empty array to pass initial objectIDs to  
    const objects = []

    //Iterate over objects array to perform additional get request to get full object record
    for (let id of res.data.objectIDs){
      const result = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id)
      //Push results to objects array
      objects.push(result.data)
    }
    //Set state using data in objects array
    setObjects(objects)
  }
 
    return (
      <div>
        <div className="App">
       <Search searchObjects={searchObjects}/>
      </div>
      </div>
    )
  
}

export default App

