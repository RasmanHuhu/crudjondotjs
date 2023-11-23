import "./styles/App.css";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";
import { useState, useEffect } from "react";
import { fetchData } from "./util/persistence";

function App() {
  const [persons, setPersons] = useState([]);
  const APIURL = "http://localhost:3000/api";

  //når applikation starter nu, så skal den gøre noget. getPersons.

  function getPersons(callback) {
    //fetche data på persons - så vi laver en const APIURL, som er vores backend.
    fetchData(APIURL, callback);

    //update UseState (setPersons) med data fra backend
  }

  useEffect(() => {
    //  getPersons(); - laver først getPersons her når vi har en backend.
    //-> Efter ovenstående function er lavet, så begynder vi her:
    getPersons((data) => setPersons(data));
    
  }, []);

  return (
    <div>
      <h1>Person DB</h1>
      <p>Nu skal der kodes!</p>
      <PersonList persons={persons}/>
      <PersonForm />
    </div>
  );
}

export default App;
