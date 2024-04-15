import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Page from "./components/Page"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path='/marca/:marca' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path="*" element={<Page><h1>404 NOT FOUND</h1></Page>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
