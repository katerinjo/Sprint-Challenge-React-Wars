import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);

  const stubItems = [
    {
      header: "stub1",
      meta: "stub2",
      description: "stub3"
    },
    {
      header: "stub4",
      meta: "stub5",
      description: "stub6"
    },
    {
      header: "stub7",
      meta: "stub8",
      description: "stub9"
    },
    {
      header: "stubA",
      meta: "stubB",
      description: "stubC"
    }
  ];

  function formatPerson(raw) {
    return {
      header: raw.name,
      description: [
        <p>Gender: {raw.gender}</p>,
        <p>Born: {raw.birth_year}</p>,
        <p>Mass: {raw.mass}</p>
      ]
    };
  }

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(resp => {
        setPeople(resp.data.results.map(formatPerson));
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card.Group centered items={people} />
    </div>
  );
}

export default App;
