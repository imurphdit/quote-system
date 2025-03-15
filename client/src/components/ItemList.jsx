import { Link } from "react-router";
import Item from "./Item";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from 'axios';

function ItemList() {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState([]);

  const changeFilter = (category) => {
    setFilter(category.toLowerCase());
  };

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);


  // Catch Clothing Items from API
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/items')
        console.log(response.data)
        setItems(response.data)
      } catch (error) {
        console.error(error.message);
      }
      
    }
    
    fetchAPI();
  }, []);
  
  return (
    <>
      <h3 className="text-center font-bold text-5xl p-10">What would you like to create?</h3>
      <div className=''>
        <div className='flex flex-row flex-wrap justify-center p-5 gap-3'>
          {['All', 'Hoodie', 'Shirt', 'Bag'].map((filter) => (
            <Item
            title={filter}
            onClick={() => changeFilter(filter)}
            key={filter}
            className={'text-center font-bold hover:text-red-500 cursor-pointer'}
          />
          ))}
        </div>
      </div>
      <div className='flex flex-wrap justify-center align-center gap-5 p-5'>
        {filteredItems.map((item) => (
          <div className='text-center border-1 border-black max-w-2xs rounded-2xl flex justify-center hover:border-red-600 hover:shadow-lg transition-transform duration-300 hover:scale-105' key={item.id}>
            <Link to={"/item/" + item.id}>
              <Item title={item.title} img={item.img} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

ItemList.propTypes = {
  items: PropTypes.any,
};

export default ItemList;
