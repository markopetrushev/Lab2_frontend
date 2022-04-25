import logo from '../../logo.svg';
import './App.css';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, NavLink, Redirect, Routes, Route} from "react-router-dom";
import Books from "../books/bookList/books";
import BooksAdd from "../books/booksAdd/booksAdd"
import BooksService from "../../repository/booksRepository";
import Categories from "../categories/categories";
import Header from "../head/header";
import BooksEdit from "../books/booksEdit/booksEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path={"/books/add"} element={<BooksAdd categories={this.state.categories} authors={this.state.authors} onAddBook={this.addBook}/>}/>
                            <Route path={"/books"} element={<Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook}/>}/>
                            <Route path={"/books/edit/:id"} element={<BooksEdit books={this.state.books} categories={this.state.categories} authors={this.state.authors} onEditBook={this.editBook} product={this.state.selectedBook}/>}/>
                            <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }

    loadBooks = () => {
        BooksService.fetchBook()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        BooksService.fetchAuthor()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadCategories = () => {
        BooksService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteBook = (id) => {
        BooksService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    addBook = (name, category, authorId, availableCopies) => {
        BooksService.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        BooksService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        BooksService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
    }
}

export default App;
