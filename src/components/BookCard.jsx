export default function BookCard({ content }) {
  return (
    <>
      <div id="results">
        {content?.map((book, index) => (
          <article key={index} id="contentCard">
            <div className="info">
              {book?.cover_i ? (
                <img
                  className="bookimg"
                  src={`http://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`}
                  alt="book cover"
                />
              ) : null}
              <section key={book?.key}>
                <span>{book?.first_publish_year}</span>
                <h3>{book?.title}</h3>
                <span>{book?.author_name?.join(", ")}</span>
              </section>
            </div>

            <section>
              {book?.ratings_average ? (
                <span>
                  Rating: {Math.round(book?.ratings_average * 10) / 10}
                </span>
              ) : (
                <span>Rating not available</span>
              )}
              {book?.isbn ? (
                <a href={`https://www.amazon.com/s?k=${book?.isbn[0]}`}>
                  Find on Amazon
                </a>
              ) : (
                <span>Amazon link not available</span>
              )}
            </section>
          </article>
        ))}
      </div>
    </>
  )
}
