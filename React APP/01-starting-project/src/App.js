import React, {useState } from "react";

function App() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  return (
    <>
      <button onClick={fetchData}>fetch</button>
      <br/> 
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>
              {userObj.title}<br/>
              {userObj.body}
              </li>
          ))}
      </ul>
    </>
  );
}

export default App;