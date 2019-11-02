import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        bookSearch: "",
        saved: false
    };

    handleInputChange = event => {
        const {name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.bookSearch);
        API.getBooks(this.state.bookSearch)
        .then(res => {
            console.log(res);
            this.setState({ books: res.data })
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="bookSearch"
                                                value={this.state.bookSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For a Book"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button 
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg"
                                            >
                                                Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <h5>Results:</h5>
                            {!this.state.books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
                            ) : (
                                <BookList>
                                    {this.state.books.map(book => {
                                        return (
                                            <BookListItem 
                                                key={`BookID-${book.volumeInfo.title}`}
                                                title={book.volumeInfo.title}
                                                href={book.volumeInfo.infoLink}
                                                author={book.volumeInfo.authors[0]}
                                                description={book.volumeInfo.description}
                                                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                                saved={this.state.saved}
                                            />
                                        );
                                    })}
                                </BookList>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Search;