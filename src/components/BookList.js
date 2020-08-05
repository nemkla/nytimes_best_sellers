import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class BooksList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.books.map((book, i) => (
          <Card className={classes.root} style={{ margin: "10px" }}>
            <CardContent>
              <Typography className={classes.title} color="textPrimary">
                {i + 1}. {book.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {book.contributor}
              </Typography>
              <Typography variant="body2" component="p">
                {book.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(BooksList);
