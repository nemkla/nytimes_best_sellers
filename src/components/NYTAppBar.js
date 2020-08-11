import React from "react"
import { matchPath } from "react-router"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

const NYTAppBar = ({push, pathName }) => {
  const classes = useStyles()
  const [state, setState] = React.useState({ drawerIsOpen: false})
  const toggleDrawer = (open) => setState({ ...state, drawerIsOpen: open })
  const isBooksPathActive = !!matchPath(pathName, "/books")
  const menuItems = [
    { title: "Home", path: "/" , selected: !isBooksPathActive},
    { title: "Books", path: "/books", selected: isBooksPathActive},
  ]

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            onClick={() => toggleDrawer(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            {isBooksPathActive ? "Books" : "Home"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={state.drawerIsOpen} onClose={() => toggleDrawer(false)}>
        <div className={classes.list} role="presentation">
          <List>
            {menuItems.map(({ title, path, selected }, index) => (
              <ListItem
                button
                selected={selected}
                key={title}
                onClick={() => {
                  push(path);
                  toggleDrawer(false);
                }}
              >
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};
const mapStateToProps = (state) => ({
  pathName: state.router.location.pathname,
});

export default connect(mapStateToProps, { push })(NYTAppBar);
