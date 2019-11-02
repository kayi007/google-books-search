// React Hook
// import React, {useState} from "react";
import React from "react";
import Thumbnail from "../Thumbnail";
import API from "../../utils/API";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  author,
  description,
  saved,
  children,
  href
}) {

  // const [isLoading, showLoading] = useState(false);

  function handleSave() {
    console.log("clicked Save");
    // showLoading(true);
    API.saveBook({
      author: author,
      description: description,
      link: href,
      title: title,
      image: thumbnail
    }).then(res => console.log(res))
      // .then(res => showLoading(false))
      .catch(err => console.log(err));
  }

  // function handleDelete(id){
  //   API.deleteBook(id)
  //   .then(res => this.loadBooks())
  //   .catch(err => console.log(err));
  // }

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h5>{author}</h5>
            <p><b>Description:</b> {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Check Out This Book!
            </a>
            {!saved ? (<Button onClick={() => handleSave()} type="warning" className="input-lg float-right">SAVE</Button>) : (
            <div>
              {children}
            </div>)}
          </Col>
        </Row>
      </Container>
    </li>
  );
}


