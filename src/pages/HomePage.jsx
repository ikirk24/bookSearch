// Home Page
import { useState } from "react"
import { searchBooks } from "../services/api"
import BookCard from "../components/BookCard";
import '../css/Home.css'
function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([])
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        setLoading(true);

        try {
            const searchResults = await searchBooks(searchQuery);
            setBooks(searchResults);
        } catch(error) {
            console.log(error);
            setErr("There's an error on the field")

        } finally {
            setLoading(false);
           
            console.log("We searched a book or author")
        }
    }
    return (


    <div className="home">
    
    <form onSubmit={handleSearch} className="search-form">
        <input type="text"
        placeholder="Search for any author or book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
    </form>

    {err && (<div className="error-message">{err} </div>)}
    
    {loading ? 
    ( <div className="loading"> Loading... </div> ) :
    ( <div className="book-grid">
        {books.map((book) => (
        <BookCard book={book} key={book.key}></BookCard>
        ))}
        </div>
    )}

</div>
)}

export default HomePage;