import './App.css'
import ItemList from './components/ItemList'

function App() {
  const items = [
    {id: "1", title: "Independent Hoodie", img: "/public/hoodie.webp", category: "hoodie"},
    {id: "2", title: "Independent Shirt", img: "/public/shirt.webp", category: "shirt"},
    {id: "3", title: "Duffel Bag", img: "/public/duffel.webp", category: "bag"},
    {id: "4", title: "Camo Hoodie", img: "/public/camo_hoodie.webp", category: "hoodie"},
  ];

  // TODO: CREATE ITEMS DYNAMICALLY VIA DATABASE

  return (
    <>
    <ItemList items={items}/>
    </>
  )
}

export default App
