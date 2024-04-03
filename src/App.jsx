import "./App.css"
import Layout from "./components/Layout"
import BookCard from "./components/BookCard"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

function App() {
  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james bond original series")
  console.log(query)

  console.log(content)

  const getData = async () => {
    try {
      const response = await fetch(
        `http://openlibrary.org/search.json?title=${query.split(" ").join("+")}`
      )
      const data = await response.json()
      setContent(data.docs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  return (
    <Layout setQuery={setQuery}>
      <Routes>
        <Route index element={<BookCard content={content} />} />
      </Routes>
    </Layout>
  )
}

export default App
