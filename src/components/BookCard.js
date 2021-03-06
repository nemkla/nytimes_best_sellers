import React, { useContext } from "react";
import {
  Typography,
  Paper,
  Button,
  ButtonGroup,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../contexts/AppContext";

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

function BookCard({ book }) {
  const [state, dispatch] = useContext(AppContext);

  const handleChange = (item) => {
    dispatch({
      type: item.selected ? "UNSELECTED_BOOK" : "SELECTED_BOOK",
      payload: item.primary_isbn10,
    });
  };

  const handleOnClick = (book) => {
    dispatch({ type: "DELETE_BOOK", payload: book.primary_isbn10 });
  };
  const classes = useStyles();
  console.log("Render: BookCard");
  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <img src={book.book_image} alt={book.title} className={classes.img} />
        <div
          className={`${classes.content} ${
            book.selected ? classes.selectedBackgroundColor : ""
          }`}
        >
          <Switch checked={book.selected} onChange={() => handleChange(book)} />
          <Typography variant="h3" color="textPrimary">
            {book.title}
          </Typography>
          <Typography variant="h4" color="textSecondary">
            {book.contributor}
          </Typography>
          <Typography component="p">{book.description}</Typography>
          <ButtonGroup size="large" aria-label="large outlined button group">
            <Button
              variant="contained"
              color="primary"
              href={book.amazon_product_url}
            >
              BUY
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleOnClick(book)}
            >
              DELETE FROM LIST
            </Button>
          </ButtonGroup>
        </div>
      </Paper>
    </>
  );
}

export default BookCard;
