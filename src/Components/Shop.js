import React ,{useState,useEffect} from 'react';
import ShopList from './Css/ShopList.css'
import Nav from './Nav'
import {Link} from 'react-router-dom';
function Shop() {
    
    useEffect (()=> {
    fetchItems();
    },[]);

    const [items, setItems] =useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        
    const items = await  data.json();
        console.log(items.data);
        setItems(items.data);
    };
    console.log(items);
  return (
    <div className="shop-list">
    <Nav/>
    {items.map(it => (
      <div>
      <h2 key={it.item.name}></h2>
      <Link to={'/shop/${it.item.name}'}>{it.item.name}</Link>
      
      </div>
    ))}
    </div>
  );
}

export default Shop;
