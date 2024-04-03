import Header from "./Header"

export default function Layout({ children, setQuery }) {
  return (
    <>
      <Header setQuery={setQuery} />
      <main>{children}</main>
    </>
  )
}
