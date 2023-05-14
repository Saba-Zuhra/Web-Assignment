import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPriority, setItemPriority] = useState(0);

  useEffect(() => {
    // get items from localStorage
    const savedItems = JSON.parse(localStorage.getItem('wishlistItems'));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    // save items to localStorage
    localStorage.setItem('wishlistItems', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (itemName ) {
      setItems([...items, { name: itemName, priority: itemPriority }]);
      setItemName('');
      setItemPriority(0);
    }
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updatePriority = (index, newPriority) => {
    const newItems = [...items];
    newItems[index].priority = newPriority;
    setItems(newItems);
  };

  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => a.priority - b.priority);
    setItems(sortedItems);
  };
  return (
      
    
       <center>
      <div className='MainContainer'>
     
    <h1>Wishlist Widget</h1>
    <div>
      <label>
        Item Name:
        <input size={50} placeholder={"Add Something to Wishlist"} type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        <button style={{backgroundColor:"black",color:"white"}}  onClick={addItem}>Add Item</button>
        <button style={{backgroundColor:"lime" ,color:"white"}}  onClick={sortItems}>Sort Items</button>
         <br />
  
      </label>
    </div>
    <ul>
      {items.map((item, index) => (
        <li key={index}> 
         <span style={{paddingRight:"20px",fontSize:"large"}}> <u> {item.name} </u> </span>
          <button  onClick={() => removeItem(index)}> <i style={{fontSize:"36px"}} className="fa fa-trash-o"> </i></button>
          <input style={{marginLeft:"20px"}}  type="number" value={item.priority} onChange={(e) => updatePriority(index, parseInt(e.target.value))} />
        </li>
      ))}
    </ul>
    </div>
    </center>
  
  );
}

export default App;
