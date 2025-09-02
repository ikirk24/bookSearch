// Book Card ~
import '../css/BookCard.css'
function BookCard ({book}) {
    return ( 
        <div className="bookCard">
            <img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`} alt={book.title} />
            <h3>{book.title}</h3>

        </div>
    )
}

export default BookCard