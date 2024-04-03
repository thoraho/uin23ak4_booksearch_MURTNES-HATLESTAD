export default function Header({ setQuery }) {
  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.previousElementSibling.value.length >= 3) {
      setQuery(e.target.previousElementSibling.value)
    }
  }

  return (
    <header>
      <h1>Book search</h1>

      <form action="">
        <input type="text" placeholder="Search for a book..." />
        <button onClick={handleClick}>Search</button>
      </form>
    </header>
  )
}
