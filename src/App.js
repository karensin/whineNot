import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // const api_call = await fetch(``)
  const domain = "https://api.globalwinescore.com/globalwinescores/latest/?wine_id=&vintage=2000&color=&is_primeurs=&lwin=1014033&lwin_11=10140332000&limit=100&offset=100&ordering=-date"
  const API_KEY = "7c242d580dd52bf8e0d0e49da4b923263630b26f"

  useEffect(() => {
    console.log('did u run')
    fetch(
      domain, {
      method: "GET",
      headers: {
        // Accept: "application/json",
        'Content-Type': "application/json",
        'Authorization': "Token 7c242d580dd52bf8e0d0e49da4b923263630b26f"
      }
    }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        // setCommitHistory(response.items);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);
  // async function requestData() {
  //   try {
  //     console.log('1')
  //     const res = await fetch(domain, {
  //       withCredentials: true,
  //       headers: {
  //         'Accept': "application/json",
  //         'Content-Type': "application/json",
  //         'Authorization': "Token 7c242d580dd52bf8e0d0e49da4b923263630b26f"
  //       },

  //     });

  //     console.log('2')

  //     const jsonRes = await res.json();
  //     console.log(jsonRes, 'jsonRes')
  //     console.log('3')
  //   } catch (error) {
  //     console.log(error, 'error message')
  //   }
  // }
  // requestData()



  return (
    <div className="App">
      <header className="App-header">
        what
      </header>
    </div>
  );
}

export default App;
