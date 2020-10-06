import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import Search from './components/objects/Search'
import Objects from './components/objects/Objects'
import MainMenu from './components/layout/Menu'
import "./App.css";
import About from "./components/pages/About";
import MyCollection from "./components/pages/MyCollection";
import SignUpForm from "./components/pages/SignUp";
import LoginForm from "./components/pages/Login";
import { Container } from 'semantic-ui-react'
import HomeHeader from "./components/layout/headers/HomeHeader";
import MyCollectionHeader from "./components/layout/headers/MyCollectionHeader";
import HomeSegment from "./components/layout/segments/HomeSegment";
import SearchHeader from "./components/layout/headers/SearchHeader"


const App = () => {
  const [objects, setObjects] = useState([]);
  const [object, setObject] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  //Search Museum Objects (text from Search Form)
  const searchObjects = async (text) => {
    //Set loading to true to render spinner.gif
    setLoading(true);

    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${text}`);
    console.log(res.data)
    //Empty array to pass initial objectIDs to  
    const objects = []

    //Iterate over objects array to perform additional get request for full object record
    for (let id of res.data.objectIDs){
      const result = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id)
      //Push results to objects array
      objects.push(result.data)
    }
    //Set state using data in objects array
    setObjects(objects)
    //Set loading to false
    setLoading(false);
  }

  //Search for a single museum object
  const getObject = async (objectID) => {
    //Set loading to true to render spinner.gif
    setLoading(true);

    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)

    setObject(res.data);
    setLoading(false);
  }

  //Clear objects from state
  const clearObjects = () => {
    setObjects([]);
    setLoading(false);
  }
 
    return (
      <Router>
        <div>
          <div className="App">
            <MainMenu
              setUser={setUser}
              user={user} 
            />
            {/* <Switch> */}
              <Route exact path="/"
              render={props => (
                <Fragment>
                  <HomeHeader />
                  <HomeSegment />
                  <section id="search_section" >
                    <SearchHeader />
                  <Search
                    searchObjects={searchObjects} 
                    clearObjects={clearObjects}
                    showClear={objects.length > 0 ? true : false}
                  />
                  </section>
              <Objects loading={loading} objects={objects} user={user}/>
                </Fragment>
              )}/>
              <Route exact path="/about" component={About}/>
              <Route 
                exact path="/mycollection"
                render={(props) => (
                  <Fragment>
                  <MyCollectionHeader />
                  <MyCollection {...props} user={user} />
                  </Fragment>
                )}
              />
              <Route 
                exact path="/signup" 
                render={(props) => (
                  <SignUpForm {...props} setObject={setUser}/>
                )}
              />
              <Route 
                exact path="/login" 
                render={(props) => (
                  <LoginForm {...props} setUser={setUser} />
                )}
              />
            {/* </Switch> */}
          </div>
          
        </div>
      </Router>
    )
  
}

export default App

