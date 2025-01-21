import './App.css'
import ItemList from './components/ItemList'
import items from './assets/items.json'

function App() {

  return (
    <>
    <ItemList items={items}/>
    </>
  )
}

export default App
