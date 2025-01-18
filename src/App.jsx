import './App.css'
import ItemList from './components/ItemList'

function App() {
  
  const items = [
    {id: "1", title: "Independent Hoodie", img: "/public/hoodie.webp"},
    {id: "2", title: "Independent Shirt", img: "/public/shirt.webp"},
    {id: "3", title: "Duffel Bag", img: "/public/duffel.webp"},
    {id: "4", title: "Camo Hoodie", img: "/public/camo_hoodie.webp"},
  ]

  return (
    <>
    <ItemList items={items}/>
    </>
  )
}

export default App
