import React, { useState } from 'react';

function App() {
  const [textObj, settextObj] = useState('');
  const [obj, setobj] = useState([]);

  const submition = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/search/users?q=${textObj}`);
    const data = await response.json();
    setobj(data.items);
  };

  const imageStyle={
    width:"180px",
    height:"180px"
  };
  return (
      
    
       <center>
      <div className='MainContainer'>
      <div>
      <form onSubmit={submition}>
        <label htmlFor="username">GitHub username:</label>
        <input type="text" id="username" value={textObj} onChange={(event) => settextObj(event.target.value)} />
        <button type="submit">Search</button>
      </form> 
      {obj.map((user) => (
        <div className="info_box" >
          <h3> <em> Name : </em> {user.login} </h3>
          <h3> <em> Link : </em> <a href={user.html_url}>{user.html_url}</a></h3>
          <img src={user.avatar_url} alt={user.login} style={imageStyle}/>
        </div>
      ))}
    </div>
   
    </div>
    </center>
  
  );
}

export default App;
