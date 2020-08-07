import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function BookCard({ book, key }) {

  const handleChange = (book) => {};
  
  return (
    <Card key={key} style={{ margin: "10px" }}>
      <CardContent>
        <input
          type="checkbox"
          checked={book.selected}
          onChange={() => handleChange(book)}
        />
        <Typography color="textPrimary">{book.title}</Typography>
        <Typography color="textSecondary">{book.contributor}</Typography>
        <Typography variant="body2" component="p">
          {book.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BookCard;
