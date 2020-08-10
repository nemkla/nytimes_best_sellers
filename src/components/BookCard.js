import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  Paper,
  Button,
  ButtonGroup,
  Switch,
} from "@material-ui/core";
import * as BookActions from "../actions/book";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    padding: "20px",
    height: "auto",
    width: "auto",
  },
  img: {
    backgroundColor: "#f1f1f1",
    flex: "1 1 auto",
  },
  content: {
    flex: "1 1 auto",
    padding: "20px",
    height: "auto",
    width: "100%",
  },
  selectedBackgroundColor: {
    backgroundColor: "#DDD",
  },
}));

function BookCard({ book, doUnSelectBook, doSelectBook, doDeleteBook }) {

  const {primary_isbn10, selected, book_image, title, contributor, description, amazon_product_url } = book;
  const handleOnChange = ({ primary_isbn10, selected }) => {
    selected ? doUnSelectBook(primary_isbn10) : doSelectBook(primary_isbn10);
  };
  const handleOnClick = (primary_isbn10) => doDeleteBook(primary_isbn10);
  const classes = useStyles();
  console.log("Render: BookCard");

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <img src={book_image} alt={title} className={classes.img} />
        <div
          className={`${classes.content} ${
            selected ? classes.selectedBackgroundColor : ""
          }`}
        >
          <Switch checked={selected} onChange={() => handleOnChange({ primary_isbn10, selected })} />
          <Typography variant="h3" color="textPrimary">
            {title}
          </Typography>
          <Typography variant="h4" color="textSecondary">
            {contributor}
          </Typography>
          <Typography component="p">{description}</Typography>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button
              variant="contained"
              color="primary"
              href={amazon_product_url}
            >
              BUY
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleOnClick(primary_isbn10)}
            >
              DELETE FROM LIST
            </Button>
          </ButtonGroup>
        </div>
      </Paper>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  doDeleteBook: query => dispatch(BookActions.doDeleteBook(query)),
  doSelectBook: query => dispatch(BookActions.doSelectBook(query)),
  doUnSelectBook: query => dispatch(BookActions.doUnSelectBook(query))
});

export default connect(
  null,
  mapDispatchToProps
)(BookCard);
