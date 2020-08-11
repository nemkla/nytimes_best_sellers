import React from "react"
import { connect } from "react-redux"
import NYTAppBar from "../NYTAppBar"
import SearchBooks from "../SearchBooks"


const Books = ({ pathname, search, hash }) => (
  <>
    <NYTAppBar />
    <div className="container">
      <div className="title">The New York Times Best Sellers</div>
      <SearchBooks />
    </div>
  </>
)

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

export default connect(mapStateToProps)(Books)
